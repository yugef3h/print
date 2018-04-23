import Vue from 'vue'
import Router from 'vue-router'
import CompareReceipts from '../modules/compareReceipts/views/CompareReceipts.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'compareReceipts',
      component: CompareReceipts,
    },
  ],
})
