import vue from 'vue'
import vuex from 'vuex'
import { resolve } from 'path';

vue.use(vuex)
const userInfo = {
  state: {
    name: 'lxpp'
  },
  actions: {},
  getters: {
    getName(state) {
      return state.name + '你好'
    },
    getName2(state, getters) {
      return getters.getName + '真好'
    },
    getName3(state, getters, rootSate) {
      return getters.getName + '真好' + rootSate.name
    }
  },
  mutations: {}
}


export default new vuex.Store({
  state: {
    name: 'lxp'
  },
  actions: {
    aModifyName(context) {
      return new Promise((resolve, reject) => {
        if (false) {
          resolve('异步操作lxp')
        } else {
          reject('异常')
        }
      }).then(res => {
        context.commit('modifyName', res)
        Promise.resolve('成功')
      })
    }
  },
  mutations: {
    /// 修改name, 会有一个默认回调参数state
    modifyName(state, payload) {
      state.name = payload
    }
  },
  getters: {
    addLastName(state, getters) {
      return state.name + 'getters'
    }
  },
  modules: {
    lxp: userInfo
  }
})