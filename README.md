# wechat

### 微信公众号基础框架
<br/>
#### 开发环境 nodejs 6.0 以上
<br/>
#### 构建工具 webpack2
<br/>
#### 技术架构 vuxUI组件库 + vuejs全家桶（Vue.js 框架 + Vuex状态管理 + Vue-router 路由） + Axios（HTTP请求库）+ vue-core-image-upload上传插件

## 项目运行

``` bash
git clone https://git.oschina.net/man-yan/wechat.git

cd vue2-elm

npm install 安装依赖

npm run dev 启动项目 localhost:8080

npm run build 编译生产环境
```

# 目录结构

```
├── build                                       // webpack配置文件
├── config                                      // 项目打包路径
├── dist                                        // 上线项目文件，放在服务器即可正常访问
├── screenshots                                 // 项目截图
├── src                                         // 源码目录
│   ├── assets                                  // 公共静态资源
│   │   ├── css                                 // 样式表
│   │   ├── font                                // 字体库
│   │   └── images                              // 图片
│   ├── components                              // 组件
│   │   ├── common                              // 公共组件
│   │   │   ├── Hello.vue                       // vue官方示例组件
│   │   │   ├── HelloFromVux.vue                // vux官方示例组件
│   │   ├── footer
│   │   │   └── footGuide.vue                   // 底部公共组件
│   │   └── header
│   │       └── head.vue                        // 头部公共组件
│   ├── config                                  // 基本配置
│   │   ├── api.js                              // api配置
│   │   ├── router.js                           // 路由配置
│   │   └── utils.js                            // 全局工具类
│   ├── page                                    // 页面文件夹
│   ├── static                                  // 纯静态页面
│   ├── App.vue                                 // 页面入口文件
│   └──  main.js                                // 程序入口文件，加载各种公共组件
├── favicon.ico                                 // 图标
└──  index.html                                 // 入口html文件
