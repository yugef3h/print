<template>
  <div class="details-line-list-item"  >
   <table-row :item="item" >
     <table-column flexWidth="1" textAlign="center" >
        <template slot="view">
        {{ CONTR_ITEM}}
        </template>
      </table-column>
      <table-column flexWidth="1" textAlign="center" >
        <template slot="view">
        {{ ID}}
        </template>
      </table-column>
      <table-column flexWidth="1" textAlign="center" >
        <template slot="view">
        {{ Quantity}}
        </template>
      </table-column>
       <!-- <table-column flexWidth="1" textAlign="center" >
        <template slot="view">
        {{ G_NAME}}
        </template>
      </table-column>
       <table-column flexWidth="1" textAlign="center" >
        <template slot="view">
        {{ G_QTY}}
        </template> -->
      </table-column>
   </table-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
@Component
export default class DetailsLineListItem extends Vue {
  @Prop({ type: Object, required: true })
  item

  ID: number = 0
  SourceName: string = ''
  Quantity: number = 0
  NotCount: Boolean = false
  CONTR_ITEM: number = 0

  created() {
    this.init()
  }

  mounted() {
    // console.log(this.item)
  }

  init() {
    this.ID = this.item.ID
    this.SourceName = this.item.Name
    this.Quantity = this.item.Quantity
    this.NotCount = this.item.NotCount
    this.CONTR_ITEM = 0
  }
}
</script>

<style scoped>
.active {
  background-color: rgba(255, 255, 0, 0.32);
}
.details-line-list-item {
  border-top: 1px solid #e5e5e5;
}
</style>
