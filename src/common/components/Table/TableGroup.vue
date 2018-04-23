<template>
  <table-row :item="tableItem" eventName="selected" >
    <table-column flexWidth="0 0 3%" textAlign="center" >
     
    </table-column>
    
  </table-row>
</template>

<script>
  
  export default {
    name: 'TableGroup',
    props: {
      tableItem: { type: Object, default: null },
      tableType: { type: Number, default: 2 }
    },
    data() {
      return {
        
      }
    }
  };
</script>

<style scoped>

</style>