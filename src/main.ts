// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.scss'

import CompareReceipts from './modules/compareReceipts'
import Components from './common/components'
import Table from './common/components/Table'

Vue.use(ElementUI)

Vue.use(Components)
Vue.use(Table)
Vue.use(CompareReceipts)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
