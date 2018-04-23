<template>
  <div class="table-row" :class="classs" :style="{'flex': flexWidth}" @mouseenter="onHover" @mouseleave="onHover" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TableRow',
  props: {
    item: { type: Object, default: null },
    flexWidth: { type: [Number, String], default: '1' },
    preventEevent: { type: Boolean, default: true }, //阻止本组件的事件
  },
  data() {
    return {
      isHover: false,
    }
  },
  computed: {
    classs() {
      return {
        'table-row-hover': this.isHover,
        'table-row-selected': this.item.isSelected,
      }
    },
  },
  methods: {
    onHover(event) {
      console.log(1231321)
      this.isHover = !this.isHover
    },
    onClick(event) {
      //实现注册事件，触发父组件函数事件
      let childEventName = event.target.getAttribute('eventName')
      let parentEventName = event.currentTarget.getAttribute('eventName')
      if (childEventName) {
        this.$parent[childEventName](this.item, event)
      }
      if (parentEventName) {
        this.$parent[parentEventName](this.item, event)
      }
    },
  },
}
</script>

<style scoped>
.table-row {
  display: flex;
  height: 50px;
  line-height: 50px;
  width: 100%;
  color: black;
}
.table-row-selected {
  background-color: #c0ccda;
}
.table-row-hover {
  background-color: #f5f5f5;
}
</style>
