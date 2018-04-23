import _ from 'lodash'
import SourceHeadModel from '../schema/SourceHeadModel'
import TargetHeadModel from '../schema/TargetHeadModel'

export default class SourceHeadEntity {
  BillNo: string
  BillNoOld: string
  CreatTime: string
  constructor() {
    this.BillNo = ''
    this.BillNoOld = ''
    this.CreatTime = ''
  }

  toEntityFromServiceSys(source: SourceHeadModel) {
    let tmp = new SourceHeadEntity()
    tmp.BillNo = source.Datas.BillNo
    tmp.BillNoOld = source.Datas.BillNo_old
    tmp.CreatTime = source.Datas.CreatTime
    return tmp
  }

  toEntityFromYiTongSys(target: TargetHeadModel) {
    let tmp = new SourceHeadEntity()
    tmp.BillNo = target.Datas.WBOOK_NO
    tmp.BillNoOld = target.Datas.CONTR_NO
    tmp.CreatTime = target.Datas.D_DATE
    return tmp
  }
}
