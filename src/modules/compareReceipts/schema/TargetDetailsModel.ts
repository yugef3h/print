import TargetDetailsInterface from '../interface/TargetDetailsInterface'
import _ from 'lodash'

export default class TargetDetailsModel {
  Datas: TargetDetailsInterface
  // Entity?: TargetDetailsEntity

  constructor(config: TargetDetailsInterface) {
    this.Datas = config
  }
}
