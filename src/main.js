/*
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2022-12-28 16:28:07
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2023-01-31 17:59:37
 * @FilePath: \bg-system\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'
import Components from '@/components'

import * as directives from '@/directives'
import * as filters from '@/filters' // 引入工具类
import i18n from '@/lang'
import CheckPermission from '@/mixin/checkPermission'
import '@/icons' // icon
import '@/permission' // permission control

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale })
// 设置element为当前的语言
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

// 注册自定义指令
// 遍历所有的导出的指令对象 完成自定义全局注册
Object.keys(directives).forEach(key => {
  // 注册自定义指令
  Vue.directive(key, directives[key])
})

// 注册全局的过滤器
Object.keys(filters).forEach(key => {
  // 注册自定义过滤器
  Vue.filter(key, filters[key])
})

// 注册自己的插件
Vue.use(Components)

// 全局混入检查对象
Vue.mixin(CheckPermission)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
