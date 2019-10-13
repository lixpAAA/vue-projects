class HistoryRoute {
  constructor() {
    this.current = null;
  }
}
class VueRouter {
  constructor(options) {
    this.mode = options.mode || 'hash'
    this.history = new HistoryRoute()
    this.routes = options.routes || []
    this.routeMap = this.createMap(this.routes)
    this.init()
  }
  init() { // 添加一些路径的监听
    if (this.mode == 'hash') {
      location.hash ? '' : location.hash = '/'
      window.addEventListener('load', () => {
        // 获取到当前的path
        this.history.current = location.hash.slice(1)
      })
      window.addEventListener('hashchange', () => {
        // 获取到当前的path
        this.history.current = location.hash.slice(1)
      })
    } else if (this.mode == 'history') {
      location.pathname ? '' : location.pathname = '/'
      window.addEventListener('load', () => {
        // 获取到当前的path
        this.history.current = location.pathname
      })
      window.addEventListener('popstate', () => {
        // 获取到当前的path
        this.history.current = location.pathname
      })
    }
  }
  createMap(routes) {
    return routes.reduce((mome, current) => {
      mome[current.path] = current.component;
      return mome;
    })
  }
}

VueRouter.install = function (Vue) {
  Vue.mixin({ // 混入全局钩子
    beforeCreate() {
      if (this.$options && this.$options.router) {
        this._root = this
        this._router = this.$options.router
        console.log('this:', this)
        Vue.util.defineReactive(this, 'current', this._router.history)
      }
      Object.defineProperty(this, '$router', {
        get: function () {
          return this._root._router
        }
      })
      Object.defineProperty(this, '$route', {
        get: function () {
          return this._root._router.history.current
        }
      })
    }
  });
  Vue.component('router-view', {
    render(r) {
      //  this指向组件的proxy
      //  this._self指向组件本省
      //  this.$root指向vue实例例
      console.log('ccccc-this:', this.$root)
      console.log('ccccc-this1:', this.$root._root._router)
      let current = this.$root._root._router.history.current;
      let routeMap = this.$root._root._router.routeMap
      return r(routeMap[current]) // 渲染当前路径对应的组件
    }
  })
}
export default VueRouter;