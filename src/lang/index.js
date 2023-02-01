/*
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2023-01-31 17:35:54
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2023-02-01 10:26:08
 * @FilePath: \bg-system\src\lang\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 多语言实例化文件

import Vue from 'vue' // 引入Vue
import VueI18n from 'vue-i18n' // 引入国际化的包
import Cookie from 'js-cookie' // 引入cookie包
import elementEN from 'element-ui/lib/locale/lang/en' // 引入饿了么的英文包
import elementZH from 'element-ui/lib/locale/lang/zh-CN' // 引入饿了么的中文包
import customZH from './zh' // 引入自定义中文包
import customEN from './en' // 引入自定义英文包

Vue.use(VueI18n) // 全局注册国际化包

export default new VueI18n({
  // i18n的选项
  // locale指的是当前的多语言的类型
  locale: Cookie.get('language') || 'zh', // 从cookie中获取语言类型 获取不到就是中文
  // messages指的是当前的语言包
  messages: {
    en: {
      ...elementEN, // 将饿了么的英文语言包引入
      ...customEN
    },
    zh: {
      ...elementZH, // 将饿了么的中文语言包引入
      ...customZH
    }
  }
})
