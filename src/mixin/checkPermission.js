/*
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2023-01-25 15:12:38
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2023-01-25 15:14:36
 * @FilePath: \bg-system\src\mixins\checkPermission.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 做一个混入对象
import store from '@/store'
export default {
  methods: {
    // 检查权限
    checkPermission(key) {
      // 去用户的信息里找points里面有没有key
      const { userInfo } = store.state.user
      if (userInfo.roles.points && userInfo.roles.points.length) {
        return userInfo.roles.points.some(item => item === key)
      }
      return false
    }
  }
}
