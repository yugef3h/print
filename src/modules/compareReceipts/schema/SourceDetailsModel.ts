import SourceDetailsInterface from '../interface/SourceDetailsInterface'
import _ from 'lodash'

export default class SourceDetailsModel {
  Datas: SourceDetailsInterface
  constructor(config: SourceDetailsInterface) {
    this.Datas = config
  }
}
