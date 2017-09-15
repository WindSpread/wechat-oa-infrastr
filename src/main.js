/**
 * 程序入口文件，加载各种公共组件
 */
// 引用 vue
import Vue from 'vue'
// 引用路由 vue-router
import VueRouter from 'vue-router'
import routes from './config/router'
// 引用 页面入口文件
import App from './App'
// 引用 消除点击延时插件
import FastClick from 'fastclick'
// 引用 vux插件 微信jssdk、Toast
import { WechatPlugin, ToastPlugin } from 'vux'
// 引用API文件
import api from './config/api'

// 将API方法绑定到全局
Vue.prototype.$api = api

// 使用 vue路由
Vue.use(VueRouter)
// 使用 微信jssdk
Vue.use(WechatPlugin)
// 使用 vux插件 Toast
Vue.use(ToastPlugin)
// 修改title
Vue.use(require('vue-wechat-title'))

const router = new VueRouter({
  // mode: 'history',
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-unused-vars */
var vm = new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
