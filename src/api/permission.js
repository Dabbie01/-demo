/*
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2023-01-14 16:07:17
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2023-01-14 16:10:27
 * @FilePath: \bg-system\src\api\permisson.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 权限管理
import request from '@/utils/request'

// 获取权限
export function getPermissionList(params) {
  return request({
    url: '/sys/permission',
    params
  })
}
// 新增权限
export function addPermission(data) {
  return request({
    url: '/sys/permission',
    method: 'post',
    data
  })
}

// 更新权限
export function updatePermission(data) {
  return request({
    url: `/sys/permission/${data.id}`,
    method: 'put',
    data
  })
}

// 删除权限
export function delPermission(id) {
  return request({
    url: `/sys/permission/${id}`,
    method: 'delete'
  })
}
// 获取权限详情
export function getPermissionDetail(id) {
  return request({
    url: `/sys/permission/${id}`
  })
}

