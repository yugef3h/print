import SourceHeadModel from './SourceHeadModel'
import SourceDetailsModel from './SourceDetailsModel'
import DetailsEntity from '../models/DetailsEntity'

export default class SourceModel {
  SourceHead: SourceHeadModel
  SourceDetails: Array<SourceDetailsModel>
  constructor(sourceHead, sourceDetails) {
    this.SourceHead = new SourceHeadModel(sourceHead)
    this.SourceDetails = this.modelFactory(sourceDetails)
  }

  modelFactory(models) {
    return _.map(models, res => {
      return new SourceDetailsModel(res)
    })
  }
}
