import Vue from 'vue'
import App from './App'
import router from './router'
import testPlugin from './plugins/test'
import './style/main.css'
import store from './store/store.js'
// import axios from './axios'
// require('./mockjs')
import ElementUi from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUi)
Vue.use(testPlugin)
// Vue.use(axios)
Vue.config.productionTip = false
import './assets/css/main.css';
console.log('store:', store)
/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
