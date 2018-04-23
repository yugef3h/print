import TableGroup from './TableGroup.vue'
import TableHeadRow from './TableHeadRow.vue'
import TableHeadColumn from './TableHeadColumn.vue'
import TableColumn from './TableColumn.vue'
import TableRow from './TableRow.vue'

const install = function(Vue) {
  Vue.component(TableGroup.name, TableGroup)
  Vue.component(TableHeadRow.name, TableHeadRow)
  Vue.component(TableHeadColumn.name, TableHeadColumn)
  Vue.component(TableColumn.name, TableColumn)
  Vue.component(TableRow.name, TableRow)
}

export default {
  install,
}
