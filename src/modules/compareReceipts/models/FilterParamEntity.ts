import _ from 'lodash'
import SourceEntity from './SourceEntity'

export default class FilterParamEntity {
  Similarity: boolean
  BillNo: string
  BillNoOld: string
  CreateTime: Array<Date>
  SourceExistingGiftsNote: boolean
  TargetExistingGiftsNote: boolean
  SourceOverageNote: boolean
  TargetOverageNote: boolean
  QuantityErrorNote: boolean

  constructor() {
    this.Similarity = true
    this.BillNo = ''
    this.BillNoOld = ''
    this.CreateTime = []
    this.SourceExistingGiftsNote = false
    this.TargetExistingGiftsNote = false
    this.SourceOverageNote = false
    this.TargetOverageNote = false
    this.QuantityErrorNote = false
  }

  readonly resetFilter: () => void = () => {
    this.Similarity = true
    this.BillNo = ''
    this.BillNoOld = ''
    this.CreateTime = []
    this.SourceExistingGiftsNote = false
    this.TargetExistingGiftsNote = false
    this.SourceOverageNote = false
    this.TargetOverageNote = false
    this.QuantityErrorNote = false
  }

  readonly filterSourceEntity: <T>(data: T) => T = data => {
    let filterData = data

    filterData = this.Similarity
      ? _.filter(filterData, fd => fd.Similarity !== 1)
      : filterData

    filterData = this.BillNo
      ? _.filter(filterData, fd => fd.SourceHead.BillNo.includes(this.BillNo))
      : filterData

    filterData = this.BillNoOld
      ? _.filter(filterData, fd =>
          fd.SourceHead.BillNoOld.includes(this.BillNoOld),
        )
      : filterData

    filterData = !_.isEmpty(this.CreateTime)
      ? _.filter(
          filterData,
          fd =>
            new Date(fd.SourceHead.CreatTime).getTime() >
              new Date(this.CreateTime[0]).getTime() &&
            new Date(fd.SourceHead.CreatTime).getTime() <
              new Date(this.CreateTime[1]).getTime(),
        )
      : filterData

    filterData = this.SourceExistingGiftsNote
      ? _.filter(filterData, fd => fd.SourceExistingGiftsNote > 0)
      : filterData

    filterData = this.TargetExistingGiftsNote
      ? _.filter(filterData, fd => fd.TargetExistingGiftsNote > 0)
      : filterData

    filterData = this.SourceOverageNote
      ? _.filter(filterData, fd => fd.SourceOverageNote > 0)
      : filterData

    filterData = this.TargetOverageNote
      ? _.filter(filterData, fd => fd.TargetOverageNote > 0)
      : filterData

    filterData = this.QuantityErrorNote
      ? _.filter(filterData, fd => fd.QuantityErrorNote > 0)
      : filterData

    return filterData
  }

  private fuzzyQueryIsExists: (source: string, target: string) => boolean = (
    source,
    target,
  ) => {
    let startIndex = 0
    let isExists = true

    for (let t of target) {
      if (source.includes(t, startIndex)) {
        startIndex = source.indexOf(t, startIndex) + 1
      } else {
        isExists = false

        break
      }
    }

    return isExists
  }
}
