<template>
  <div class="table-head-row" >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TableHeadRow',
  props: {
    FlexItem: { type: Number, default: 1 },
  },
}
</script>

<style scoped>
.table-head-row {
  display: flex;
  /* background-color: #e5e9f2; */
  height: 50x;
  line-height: 50px;
  vertical-align: middle;
  cursor: pointer;
  color: black;
}
</style>
