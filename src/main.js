import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import load from './views/loading.vue'
import Blob from './excel/Blob'
import Export2Excel from './excel/Export2Excel'

import axios from 'axios'
Vue.prototype.axios = axios

axios.defaults.baseURL = 'http://192.168.7.107:10086/'
Vue.use(iView)

Vue.component('load', load)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
