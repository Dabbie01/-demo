/*
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2023-01-25 16:39:48
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2023-01-31 12:01:39
 * @FilePath: \bg-system\src\api\common.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request'

export function imgDownload(data) {
  debugger
  return request({
    url: `/system/upfile/${data.id}`
  })
}
export function imgUpload(data) {
  return request({
    url: '/system/upfile',
    data,
    type: 'post'
  })
}

export function getCityJSON() {
  return request({
    url: '../../static/json/map.json'
  })
}
export function getCityList() {
  return request({
    url: '/sys/city'
  })
}

