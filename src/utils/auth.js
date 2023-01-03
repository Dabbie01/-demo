/*
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2022-12-28 16:28:07
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2023-01-03 12:19:14
 * @FilePath: \bg-system\src\utils\auth.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%A
 */
// 获取token`**,**`设置token`**,**`删除token`**的方法,
import Cookies from 'js-cookie'

const TokenKey = 'Dabbie-bg-sysytem' // 设置独一无二的key
const timeKey = 'Dabbie-bg-sysytem-timestamp' // 设置一个独一无二的key

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

// 获取时间戳
export function getTimeStamp() {
  return Cookies.get(timeKey)
}
// 读取时间戳
export function setTimeStamp() {
  Cookies.set(timeKey, Date.now())
}
