<template>
  <div class="details-line-list">
    <table-head-row>
      <table-head-column flexWidth="1" textAlign="center">项号</table-head-column>
      <table-head-column flexWidth="1" textAlign="center">料号</table-head-column>
      <table-head-column flexWidth="1" textAlign="center">数量</table-head-column>
    </table-head-row>
    <div style="height: 64vh;overflow: auto;">
    <template v-for=" k in item">
      <details-line-list-item :item="k"></details-line-list-item>
    </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
@Component
export default class DetailsLineList extends Vue {
  @Prop({ type: Array, required: true })
  item
  mounted() {
    // console.log(this.item)
  }
}
</script>

<style scoped>
.details-line-list {
  height: 100%;
}
</style>
