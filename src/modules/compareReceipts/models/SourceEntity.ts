import DetailsEntity from '../models/DetailsEntity'
import SourceHeadEntity from './SourceHeadEntity'

export default class SourceEntity {
  SourceCommonDetails: Array<DetailsEntity>
  SourceOverageDetails: Array<DetailsEntity>
  TargetCommonDetails: Array<DetailsEntity>
  TargetOverageDetails: Array<DetailsEntity>
  SourceGiftsDetails: Array<DetailsEntity>
  TargetGiftsDetails: Array<DetailsEntity>
  SourceQuantityErrorDetails: Array<DetailsEntity>
  TargetQuantityErrorDetails: Array<DetailsEntity>
  SourceHead?: SourceHeadEntity
  TargetHead?: SourceHeadEntity

  SourceExistingGiftsNote: number
  TargetExistingGiftsNote: number
  SourceOverageNote: number
  TargetOverageNote: number
  QuantityErrorNote: number

  Similarity: Number
  constructor() {
    this.SourceCommonDetails = []
    this.SourceOverageDetails = []
    this.TargetCommonDetails = []
    this.TargetOverageDetails = []
    this.SourceGiftsDetails = []
    this.TargetGiftsDetails = []
    this.SourceQuantityErrorDetails = []
    this.TargetQuantityErrorDetails = []
    this.SourceExistingGiftsNote = 0
    this.TargetExistingGiftsNote = 0
    this.SourceOverageNote = 0
    this.TargetOverageNote = 0
    this.QuantityErrorNote = 0
    this.Similarity = 0
  }
}
