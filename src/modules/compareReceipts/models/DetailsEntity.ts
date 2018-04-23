import SourceDetailsModel from '../schema/SourceDetailsModel'
import TargetDetailsModel from '../schema/TargetDetailsModel'

export default class DetailsEntity {
  WBOOK_NO: string
  ID: number
  Name: string
  Quantity: number
  CONTR_ITEM?: number
  NotCount: Boolean

  constructor() {
    this.ID = 0
    this.WBOOK_NO = ''
    this.Name = ''
    this.Quantity = 0
    this.NotCount = false
  }

  toEntityFromServiceSys(config: SourceDetailsModel) {
    let newEntity = new DetailsEntity()
    newEntity.ID = config.Datas.ID
    newEntity.Name = config.Datas.Name
    newEntity.Quantity = config.Datas.Quantity
    return newEntity
  }

  toEntityFromYiTongSys(config: TargetDetailsModel) {
    let newEntity = new DetailsEntity()
    newEntity.ID = parseInt(config.Datas.COP_G_NO, 10)
    newEntity.Name = config.Datas.G_NAME
    newEntity.Quantity = config.Datas.G_QTY
    newEntity.CONTR_ITEM = parseInt(config.Datas.CONTR_ITEM, 10)
    return newEntity
  }
}
