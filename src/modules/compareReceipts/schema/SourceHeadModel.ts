import SourceHeadInterface from '../interface/SourceHeadInterface'
import _ from 'lodash'

export default class SourceHeadModel {
  Datas: SourceHeadInterface
  // Entity?: SourceHeadEntity

  constructor(config: SourceHeadInterface) {
    this.Datas = config
  }
}
