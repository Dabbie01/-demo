/*
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2022-12-28 16:28:07
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2022-12-29 17:29:01
 * @FilePath: \bg-system\src\store\modules\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { getToken, setToken, removeToken } from '@/utils/auth'
import { login } from '@/api/user'

// 状态
const state = {
  token: getToken() // 设置token为共享状态 --初始化vuex的时候，就会先从缓存中读取
}
// 修改状态
const mutations = {
  // 设置token
  setToken(state, token) {
    state.token = token // 设置token  只是修改state的数据
    // vuex变化 => 缓存数据
    // 同步缓存
    setToken(token)
  },
  // 删除缓存
  removeToken(state) {
    state.token = null // 删除vuex的token
    removeToken() // 先清除 vuex  再清除缓存 vuex和 缓存数据的同步
  }
}
// 执行异步
const actions = {
  // 定义login action  也需要参数 调用action时 传递过来的参数
  async login(context, data) {
    // 调用api接口，那边传过来的是一个promise对象，用async await来接收
    const result = await login(data) // 拿到token
    context.commit('setToken', result) // 设置token --已经在响应拦截器处解构了success
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
