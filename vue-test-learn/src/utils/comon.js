const path1 = require('path')
export function getRouteList() {
  let routeList = []
  let compo = require.context('@/views', true, /\.vue$/)
  compo.keys().forEach(key => {
    let c = compo(key).default
    let route = {}
    route.path = '/' + c.name
    route.name = c.name
    route.component = () => import('@/views' + '/' + c.name)
    routeList.push(route)
  })
  console.log('routeList:', routeList)
  return routeList
}
// path: '/home',
//   name: 'home',
//   component: () => import('@/views/home'),
//   meta: {
//     title: '首页'
//   }