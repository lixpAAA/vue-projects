import axios from 'axios'

/**
 * axios默认请求方式为get, 内部已经封装了promise
 * axios.all的返回结果，可以用axios.spread(res1,res2)展开分别得到返回结果
 */
///  似乎只能满足同一服务地址
export default {
  install(Vue) {
    Vue.prototype.$http = axios
    Vue.prototype.$http.http = axios
  }
};

