import Vue from 'vue'
import Router from 'vue-router'
// import Router from '../js/myVueRouter'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/home'

Vue.use(Router)
const route = new Router({
  // mode: 'history',
  // linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/helloword',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/test/:param',
      name: 'Test',
      component: () => import('@/components/test'),
      meta: {
        title: '测试服首页'
      },
      children: [
        {
          path: 'testc1/:name',
          name: 'testc1',
          component: () => import('@/components/testC_1'),
          meta: {
            title: '测试页页'
          }
        },
        {
          path: 'testc2/:name',
          name: 'testc2',
          component: () => import('@/components/testC_1'),
          meta: {
            title: '测试页页2'
          }
        }
      ]
    }
  ]
})

// route.beforeEach((to, from, next) => {
//   document.title = to.meta.title
//   // debugger
//   next()
// })

export default route