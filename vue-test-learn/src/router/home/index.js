// import Home from '@/views/home'
export default {
  path: '/home',
  name: 'home',
  component: () => import('@/views/home'),
  meta: {
    title: '首页'
  }
}