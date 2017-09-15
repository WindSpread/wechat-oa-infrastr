/**
 * vue-router 路由表
 */
// 引用模板
import Home from '@/components/HelloFromVux'
import Hello from '@/components/Hello'
import Demo from '@/page/demo/demo'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Hello',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/Demo',
    name: 'Demo',
    component: Demo
  }
]
