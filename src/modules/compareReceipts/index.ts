import CompareReceipts from './views/CompareReceipts.vue'
import DetailsLineList from './views/DetailsLineList.vue'
import DetailsLineListItem from './views/DetailsLineListItem.vue'
import ReceiptsGroup from './views/ReceiptsGroup.vue'
import HeadLine from './views/HeadLine.vue'

//
const install = function(Vue) {
  Vue.component(CompareReceipts.name, CompareReceipts)
  Vue.component(DetailsLineList.name, DetailsLineList)
  Vue.component(DetailsLineListItem.name, DetailsLineListItem)
  Vue.component(HeadLine.name, HeadLine)
  Vue.component(ReceiptsGroup.name, ReceiptsGroup)
}

export default {
  install,
}
