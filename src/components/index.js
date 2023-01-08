/*
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2023-01-08 17:24:07
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2023-01-08 17:26:52
 * @FilePath: \bg-system\src\components\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// 该文件负责所有的公共的组件的全局注册--然后就可以全局使用   Vue.use
import PageTools from './PageTools'
export default {
  install(Vue) {
    //  注册全局的通用栏组件对象
    Vue.component('PageTools', PageTools)
  }
}
