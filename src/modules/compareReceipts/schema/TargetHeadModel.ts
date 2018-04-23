import TargetHeadInterface from '../interface/TargetHeadInterface'

export default class TargetHeadModel {
  Datas: TargetHeadInterface

  constructor(config: TargetHeadInterface) {
    this.Datas = config
  }
}
