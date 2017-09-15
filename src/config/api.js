/**
 * api 接口配置
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
// 使用 vue路由
Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  routes
})
// 配置API接口地址
// var root = process.env.API_ROOT
// var root = 'http://tuanjie.yocent.cn:88/v1/api'
var root = window.location.protocol + '//' + window.location.host
// 引用axios
console.log(root)
var axios = require('axios')
// 自定义判断元素类型JS
function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull (o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}

function apiAxios (method, url, params, success, failure) {
  if (params) {
    params = filterNull(params)
  }
  axios({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'
    },
    baseURL: root,
    // withCredentials: true
    withCredentials: false
  })
  .then(function (res) {
    if (res.data.status === 1) {
      if (success) {
        success(res.data)
      }
    } else {
      if (failure) {
        failure(res.data)
      } else {
        window.alert('error: ' + JSON.stringify(res.data))
      }
    }
  })
  .catch(function (err) {
    let res = err.response
    if (err) {
      // window.alert('api error, HTTP CODE: ' + res.status)
      if (res.data.error_code === '30001') {
        window.location.href = root + '/v1/api/user/login?platform=wechat'
        alert(res.data.error)
      }
      if (res.data.error_code === '30002') {
        router.push({path: '/dist/bindingPhone'})
        alert(res.data.error)
      } else {
        alert(res.data.error)
      }
      return
    }
  })
}

// 返回在vue模板中的调用接口
export default {
  get: function (url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return apiAxios('POST', url, params, success, failure)
  },
  put: function (url, params, success, failure) {
    return apiAxios('PUT', url, params, success, failure)
  },
  delete: function (url, params, success, failure) {
    return apiAxios('DELETE', url, params, success, failure)
  }
}
