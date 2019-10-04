import Vue from 'vue'
import App from './App'
import router from './router'
import testPlugin from './plugins/test'
import './style/main.css'
import store from './store/store.js'
import axios from './axios'

Vue.use(testPlugin)
Vue.use(axios)
Vue.config.productionTip = false
console.log('store:', store)
/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
