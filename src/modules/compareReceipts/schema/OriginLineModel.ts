import SourceModel from './SourceModel'
import TargetModel from './TargetModel'

export default class OriginLineModel {
  Source: SourceModel
  Target?: TargetModel
  Similarity: Number
  constructor({ Source, Target, Similarity }) {
    this.Source = new SourceModel(Source.Head, Source.Details)
    this.Target = Target
      ? new TargetModel(Target.Head, Target.Details)
      : undefined
    this.Similarity = Similarity
  }
}
