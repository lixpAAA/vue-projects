import axios from 'axios'

/**
 * axios默认请求方式为get, 内部已经封装了promise
 * axios.all的返回结果，可以用axios.spread(res1,res2)展开分别得到返回结果
 */

export default {
  install(Vue) {
    let newAxios = null
    Vue.prototype.$http = newAxios || axios
    Vue.prototype.$http.http = newAxios || axios
    Vue.prototype.$http.http.config = function (config) {
      if (config) {
        newAxios = axios.create(config)
      } else {
        newAxios = axios
      }
    }
  }
};

