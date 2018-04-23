import TargetDetailsModel from './TargetDetailsModel'
import TargetHeadModel from './TargetHeadModel'
import DetailsEntity from '../models/DetailsEntity'

export default class TargetModel {
  TargetHead: TargetHeadModel
  TargetDetails: Array<TargetDetailsModel>
  constructor(targetHead, targetDetails) {
    this.TargetHead = new TargetHeadModel(targetHead)
    this.TargetDetails = this.modelFactory(targetDetails)
  }

  modelFactory(models) {
    return _.map(models, res => {
      return new TargetDetailsModel(res)
    })
  }
}
