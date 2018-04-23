<template>
  <div class="table-head-column" :style="{'flex': flexWidth}">
    <div class="static"  :style="{'text-align': textAlign}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TableHeadColumn",
    props: {
      flexWidth: {type:[Number, String], default: null},
      textAlign:{type:String, default: ''}
    }
  }
</script>

<style scoped>
  .table-head-column{
    overflow: hidden;
  }
</style>