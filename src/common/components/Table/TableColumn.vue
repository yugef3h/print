<template>
  <div class="table-column" :style="{'flex': flexWidth}" >
    <!-- <div class="view"  :style="{'text-align': textAlign,'width': width}" v-show="!onEdit" >
      <slot></slot>
    </div> -->
    <div class="view"  :style="{'text-align': textAlign,'width': width}" v-show="!onEdit" >
      <slot name="view"></slot>
    </div>
    <div class="edit" :style="{'text-align': textAlign,'width': width}" v-show="onEdit">
      <slot name="edit">
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableColumn',
  props: {
    item: { type: Object, default: null },
    flexWidth: { type: [Number, String], default: '1' },
    textAlign: { type: String, default: 'center' },
    width: { type: String, default: '100%' }
  },
  mounted() {},
  computed: {
    onEdit() {
      return this.item ? this.item.onEdit : false
    },
    readOnly() {
      return this.item ? this.item.ReadOnly : false
    },
    isHover() {
      return this.item ? this.item.IsHover : false
    },
    isVisible() {
      return this.item ? this.item.Visible : false
    }
  }
}
</script>
<style scoped>
.table-column {
  display: flex;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
