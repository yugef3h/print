<template>
  <div class="head-line" @click="showTable" :class="{active: activeColor}">
    <table-row :item="item" >
      <table-column flexWidth="1" textAlign="left" >
        <template slot="view">
         {{BillNo}}
        </template>
      </table-column>
      <table-column flexWidth="1" textAlign="left" >
        <template slot="view">
         {{BillNo_old}}
        </template>
      </table-column>
      <table-column flexWidth="1" textAlign="left" >
        <template slot="view">
         {{CreatTime}}
        </template>
      </table-column>
      <table-column flexWidth="1" textAlign="right" >
        <template slot="view">
        {{QuantityErrorNote}}
        </template>
      </table-column>
      <table-column flexWidth="1" textAlign="right" >
        <template slot="view">
         {{SourceExistingGiftsNote}}
        </template>
      </table-column>
      <table-column flexWidth="1" textAlign="right" >
        <template slot="view">
          {{SourceOverageNote}}
        </template>
      </table-column>
      <table-column flexWidth="1" textAlign="right" >
        <template slot="view">
         {{TargetExistingGiftsNote}}
        </template>
      </table-column>
      <table-column flexWidth="1" textAlign="right" >
        <template slot="view">
         {{TargetOverageNote}}
        </template>
      </table-column>
      <table-column flexWidth="1" textAlign="right" >
        <template slot="view">
         {{similarity}}%
        </template>
      </table-column>
    </table-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import SourceHeadEntity from 'src/modules/compareReceipts/models/SourceHeadEntity'
import SourceEntity from 'src/modules/compareReceipts/models/SourceEntity'
@Component
export default class HeadLine extends Vue {
  @Prop({ type: Object, required: true })
  item

  similarity: string = this.item.Similarity != 1
    ? new Number(this.item.Similarity * 100).toFixed(2)
    : '0'

  headEntity: SourceHeadEntity = this.item.SourceHead

  activeColor: boolean = false

  BillNo: string = ''
  BillNo_old: string = ''
  CreatTime: string = ''
  WBOOK_NO: string = ''
  IMPORT_TIME: string = ''
  PRE_ENTRY_ID: string = ''
  QuantityErrorNote: number = 0
  SourceExistingGiftsNote: number = 0
  SourceOverageNote: number = 0
  TargetOverageNote: number = 0
  TargetExistingGiftsNote: number = 0

  created() {
    this.init()
    if (parseInt(this.similarity) != 100) {
      this.activeColor = true
    }
    // if (this.SourceOverageNote > 0 && parseInt(this.similarity) === 100) {
    //   this.activeColor = true
    // }
    // if (this.TargetOverageNote > 0 && parseInt(this.similarity) === 100) {
    //   this.activeColor = true
    // }
  }

  mounted() {}

  init() {
    this.BillNo = this.headEntity.BillNo
    this.BillNo_old = this.headEntity.BillNoOld
    ;(this.CreatTime = this.headEntity.CreatTime.split('T')[0]),
      (this.QuantityErrorNote = this.item.QuantityErrorNote)
    this.SourceExistingGiftsNote = this.item.SourceExistingGiftsNote
    this.SourceOverageNote = this.item.SourceOverageNote
    this.TargetOverageNote = this.item.TargetOverageNote
    this.TargetExistingGiftsNote = this.item.TargetExistingGiftsNote
  }

  showTable() {
    this.$emit('showTable')
  }
}
</script>

<style scoped>
.active {
  background-color: rgba(255, 255, 0, 0.32);
}
.head-line {
  border-top: 1px solid #e5e5e5;
}
</style>
