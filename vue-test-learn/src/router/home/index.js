// import Home from '@/views/home'
const path = 'C:/Users/Administrator/Desktop/project/vue-projects-master/vue-projects-master/vue-test-learn/dist'

export default {
  path: path + '/home',
  name: 'home',
  component: () => import('@/views/home'),
  meta: {
    title: '首页'
  }
}