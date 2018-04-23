<template>
  <div class="receipts-group">
      <head-line :item="item"  @showTable="showTable"></head-line>
      <el-dialog
        title="比对错误详情"
        :visible.sync="dialogVisible"
        width="80%"
        top="5vh"
        >
        <el-row :gutter="30">
          <el-col :span="4" class="details-layout">
            <div class="details-item">源勾兑项</div>
            <details-line-list :item="item.SourceQuantityErrorDetails" ></details-line-list>
          </el-col>
          <el-col :span="4">
            <div class="details-item">目标勾兑项</div>
            <details-line-list :item="item.TargetQuantityErrorDetails" ></details-line-list>
          </el-col>
          <el-col :span="4">
            <div class="details-item">源多余项</div>
            <details-line-list :item="item.SourceOverageDetails" ></details-line-list>
          </el-col>
          <el-col :span="4">
            <div class="details-item" >目标多余项</div>
             <details-line-list :item="item.TargetOverageDetails" ></details-line-list>
          </el-col>
          <el-col :span="4">
            <div class="details-item">源赠品项</div>
            <details-line-list :item="item.SourceGiftsDetails" ></details-line-list>
          </el-col>
          <el-col :span="4">
            <div class="details-item">目标赠品项</div>
            <details-line-list :item="item.TargetGiftsDetails" ></details-line-list>
          </el-col>
        </el-row>
      </el-dialog>

       

      
            
      
  </div>
</template>

<script lang="ts">
import CompareReceiptsManager from '../models/CompareReceiptsManager'
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component
export default class ReceiptsGroup extends Vue {
  @Prop({ type: Object, required: true })
  item
  visible: boolean = false
  dialogVisible: boolean = false

  created() {
    // console.log(this.item)
  }
  showTable() {
    this.dialogVisible = true
  }
}
</script>

<style scoped>
.details-item {
  text-align: center;
  margin-bottom: 10px;
  color: black;
}
</style>
