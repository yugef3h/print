<template>
  <div class="compare-receipts">
    <div class="filter-container">
      <div class="filter">
        <el-input placeholder="请输入需要筛选的单据号"
          v-model="compareReceiptsManager.Filter.BillNo" />
      </div>
      <div class="filter">
        <el-input placeholder="请输入需要筛选的旧单据号"
          v-model="compareReceiptsManager.Filter.BillNoOld" />
      </div>
      <div class="filter">
        <el-date-picker v-model="compareReceiptsManager.Filter.CreateTime"
          type="daterange"
          range-separator="至"
          start-placeholder="创建时间筛选起始"
          end-placeholder="创建时间筛选截至" />
      </div>
      <div class="filter">
        <el-checkbox v-model="compareReceiptsManager.Filter.SourceExistingGiftsNote">
          仅显示源数据存在赠品数量的数据
        </el-checkbox>
      </div>
      <div class="filter">
        <el-checkbox v-model="compareReceiptsManager.Filter.TargetExistingGiftsNote">
          仅显示目标数据存在赠品数量的数据
        </el-checkbox>
      </div>
      <div class="filter">
        <el-checkbox v-model="compareReceiptsManager.Filter.SourceOverageNote">
          仅显示源数据存在多余数量的数据
        </el-checkbox>
      </div>
      <div class="filter">
        <el-checkbox v-model="compareReceiptsManager.Filter.TargetOverageNote">
          仅显示目标数据存在多余数量的数据
        </el-checkbox>
      </div>
      <div class="filter">
        <el-checkbox v-model="compareReceiptsManager.Filter.QuantityErrorNote">
          仅显示存在数量报错的数据
        </el-checkbox>
      </div>
      <div class="filter">
        <el-checkbox v-model="compareReceiptsManager.Filter.Similarity">
          仅显示无法完全匹配的数据
        </el-checkbox>
      </div>
      <div class="filter">
        <el-button type="primary"
          @click="compareReceiptsManager.ResetList()">
          重置
        </el-button>
        <el-button type="primary"
          @click="compareReceiptsManager.FilterList()">
          确认
        </el-button>
      </div>
    </div>
    <table-head-row>
      <span style="font-size: 20px;font-weight: bold;">单据比对</span>
    </table-head-row>
    <table-head-row class="table-head">
      <table-head-column flexWidth="1"
        textAlign="left">
        单据号
      </table-head-column>
      <table-head-column flexWidth="1"
        textAlign="left">
        单据号
      </table-head-column>
      <table-head-column flexWidth="1"
        textAlign="left">
        创建时间
      </table-head-column>
      <table-head-column flexWidth="1"
        textAlign="right">
        数量报错
      </table-head-column>
      <table-head-column flexWidth="1"
        textAlign="right">
        源赠品数量
      </table-head-column>
      <table-head-column flexWidth="1"
        textAlign="right">
        源多余数量
      </table-head-column>
      <table-head-column flexWidth="1"
        textAlign="right">
        目标赠品数量
      </table-head-column>
      <table-head-column flexWidth="1"
        textAlign="right">
        目标多余数量
      </table-head-column>
      <table-head-column flexWidth="1"
        textAlign="right">
        相似度
      </table-head-column>
    </table-head-row>
    <template v-for="item in compareReceiptsManager.SourceListFiltered">
      <receipts-group :item="item" :key="item.SourceHead.BillNo"></receipts-group>
    </template>
  </div>
</template>

<script lang="ts">
import CompareReceiptsManager from '../models/CompareReceiptsManager'
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import SourceEntity from 'src/modules/compareReceipts/models/SourceEntity'
@Component
export default class CompareReceipts extends Vue {
  compareReceiptsManager: CompareReceiptsManager = new CompareReceiptsManager()
  sourceList: Array<SourceEntity> = []
  created() {}
  mounted() {
    this.getReceipts()
  }

  getReceipts() {
    this.compareReceiptsManager.getReceipts()
  }
}
</script>

<style lang="scss" scoped>
.compare-receipts {
  width: 80%;
  margin: 20px auto;
  border: 1px solid #e5e5e5;
  padding: 24px;

  .filter-container {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    line-height: 64px;
    padding: 0 20px;

    .filter {
      flex: none;
      padding: 0 20px;
    }
  }

  .table-head {
    color: rgba(0, 0, 0, 0.54);
  }
}
</style>
