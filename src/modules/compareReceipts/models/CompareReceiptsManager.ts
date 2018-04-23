import OriginLineModel from '../schema/OriginLineModel'
import axios from 'axios'
import _ from 'lodash'
import SourceDetailsModel from '../schema/SourceDetailsModel'
import TargetDetailsModel from '../schema/TargetDetailsModel'
import SourceModel from '../schema/SourceModel'
import TargetModel from '../schema/TargetModel'
import DetailsEntity from './DetailsEntity'
import SourceEntity from './SourceEntity'
import SourceHeadEntity from './SourceHeadEntity'
import SourceHeadModel from '../schema/SourceHeadModel'
import TargetHeadModel from '../schema/TargetHeadModel'
import FilterParamEntity from '../models/FilterParamEntity'

export default class CompareReceiptsManager {
  Receipts: Array<OriginLineModel>

  CommonSourceDetails: Array<SourceModel>
  CommonTargetDetails: Array<TargetModel>

  SourceHeadList: Array<SourceHeadEntity>
  SourceList: Array<SourceEntity>
  SourceOverageDetails: Array<SourceModel>

  SourceListFiltered: Array<SourceEntity>
  Filter: FilterParamEntity

  constructor() {
    this.Receipts = []
    this.CommonSourceDetails = []
    this.CommonTargetDetails = []
    this.SourceHeadList = []
    this.SourceList = []
    this.SourceOverageDetails = []
    this.SourceListFiltered = []
    this.Filter = new FilterParamEntity()
  }

  async getsfsf() {
    let value = await Promise.resolve('12313');
    return value
  }

  getReceipts() {
    let that = this
    
    axios.get('/static/2018-04-02-10-19-53.json').then(res => {
      that.Receipts = _.map(res.data, p => {
        return new OriginLineModel(p)
      })

      _.each(that.Receipts, (r: OriginLineModel) => {
        let newSourceEntity: SourceEntity = new SourceEntity()
        let headEntitys = that.initIalizeHeadList(
          r.Source ? r.Source.SourceHead : undefined,
          r.Target ? r.Target.TargetHead : undefined,
        )
        newSourceEntity.SourceHead = headEntitys.sourceHead
        newSourceEntity.TargetHead = headEntitys.targetHead
        newSourceEntity.Similarity = r.Similarity

        let sourceDetailsEntity: Array<
          DetailsEntity
        > = that.detailsEntityFactory(r.Source.SourceDetails, 1)

        let targetDetailsEntity: Array<DetailsEntity> = r.Target
          ? that.detailsEntityFactory(r.Target.TargetDetails, 2)
          : ''

        let commonDetails = that.FindCommonDetails(
          sourceDetailsEntity,
          targetDetailsEntity,
        )
        newSourceEntity.SourceCommonDetails = commonDetails.sourceCommonDetails
        newSourceEntity.TargetCommonDetails = commonDetails.targetCommonDetails
        newSourceEntity.SourceQuantityErrorDetails =
          commonDetails.sourceQuantityErrorDetails
        newSourceEntity.TargetQuantityErrorDetails =
          commonDetails.targetQuantityErrorDetails
        newSourceEntity.QuantityErrorNote = commonDetails.quantityError

        let sourceOverage = that.findOverageDetails(
          sourceDetailsEntity,
          commonDetails.sourceCommonDetails,
        )

        let sourceGifts = that.filterGiftDetails(sourceOverage)
        newSourceEntity.SourceOverageDetails = sourceGifts.overageDetails
        newSourceEntity.SourceOverageNote = sourceGifts.overageDetails.length
        newSourceEntity.SourceGiftsDetails = sourceGifts.giftsDetails
        newSourceEntity.SourceExistingGiftsNote =
          sourceGifts.giftsDetails.length

        let targetOverage = that.findOverageDetails(
          targetDetailsEntity,
          commonDetails.targetCommonDetails,
        )
        let targetGifts = that.filterGiftDetails(targetOverage)
        newSourceEntity.TargetOverageDetails = targetGifts.overageDetails
        newSourceEntity.TargetOverageNote = targetGifts.overageDetails.length
        newSourceEntity.TargetGiftsDetails = targetGifts.giftsDetails
        newSourceEntity.TargetExistingGiftsNote =
          targetGifts.giftsDetails.length

        that.SourceList.push(newSourceEntity)
      })

      that.FilterList()
    })
  }

  readonly FilterList: () => void = () => {
    this.SourceListFiltered = this.Filter.filterSourceEntity(this.SourceList)
  }

  readonly ResetList: () => void = () => {
    this.Filter.resetFilter()
    this.FilterList()
  }

  detailsEntityFactory(detailsModels, flag) {
    if (detailsModels && flag === 1) {
      return _.map(detailsModels, r => {
        return new DetailsEntity().toEntityFromServiceSys(r)
      })
    }

    if (detailsModels && flag === 2) {
      return _.map(detailsModels, r => {
        return new DetailsEntity().toEntityFromYiTongSys(r)
      })
    }
  }

  initIalizeHeadList(source?: SourceHeadModel, target?: TargetHeadModel) {
    let newModel: SourceHeadEntity = new SourceHeadEntity()
    let sourceHead = source
      ? newModel.toEntityFromServiceSys(source)
      : undefined
    let targetHead = target ? newModel.toEntityFromYiTongSys(target) : undefined
    return { sourceHead: sourceHead, targetHead: targetHead }
  }

  FindCommonDetails(
    source: Array<DetailsEntity>,
    target?: Array<DetailsEntity>,
  ) {
    let that = this
    let targetItem: DetailsEntity
    let sourceCommonDetails: Array<DetailsEntity> = []
    let targetCommonDetails: Array<DetailsEntity> = []
    let sourceOverageDetails: Array<DetailsEntity> = []
    let targetQuantityErrorDetails: Array<DetailsEntity> = []
    let sourceQuantityErrorDetails: Array<DetailsEntity> = []
    let quantityError = 0
    if (!source) {
      throw Error('source不能为空')
    }
    if (target) {
      _.each(source, (p: DetailsEntity) => {
        targetItem = _.find(target, (r: DetailsEntity) => {
          return p.ID === r.ID
        })
        if (targetItem) {
          sourceCommonDetails.push(p)
          targetCommonDetails.push(targetItem)
          if (
            that.compareCommonDetailsQuantity(p.Quantity, targetItem.Quantity)
          ) {
            sourceQuantityErrorDetails.push(p)
            targetQuantityErrorDetails.push(targetItem)
            quantityError += 1
            p.NotCount = true
            targetItem.NotCount = true
          }
        }
      })
    }
    return {
      sourceCommonDetails: sourceCommonDetails,
      targetCommonDetails: targetCommonDetails,
      quantityError: quantityError,
      sourceQuantityErrorDetails: sourceQuantityErrorDetails,
      targetQuantityErrorDetails: targetQuantityErrorDetails,
    }
  }

  findOverageDetails(
    origin: Array<DetailsEntity>,
    common: Array<DetailsEntity>,
  ): Array<DetailsEntity> {
    let tmp: Array<DetailsEntity>
    _.each(common, (r: DetailsEntity) => {
      _.remove(origin, (p: DetailsEntity) => {
        return r.ID === p.ID
      })
    })

    return (tmp = origin)
  }

  compareCommonDetailsQuantity(source: number, target: number) {
    if (source !== target) {
      return true
    }
    return false
  }

  filterGiftDetails(overageDetails: Array<DetailsEntity>) {
    let giftsDetails: Array<DetailsEntity> = []
    if (overageDetails.length > 0 && overageDetails[0].CONTR_ITEM) {
      giftsDetails = _.remove(overageDetails, (r: DetailsEntity): any => {
        if (r.CONTR_ITEM && r.CONTR_ITEM > 901) {
          return true
        }
      })
    }

    return { overageDetails: overageDetails, giftsDetails: giftsDetails }
  }
}
