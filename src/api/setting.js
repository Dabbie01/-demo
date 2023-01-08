/*
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2023-01-08 10:42:40
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2023-01-08 15:09:29
 * @FilePath: \bg-system\src\api\setting.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request'

/**
 * 获取角色列表
 * ***/
export function getRoleList(params) {
  return request({
    url: '/sys/role',
    params
  })
}

/**
 * 获取公司信息
 * **/
export function getCompanyInfo(companyId) {
  return request({
    url: `/company/${companyId}`
  })
}

/** **
 *  删除角色
 * ****/
export function deleteRole(id) {
  return request({
    url: `/sys/role/${id}`,
    method: 'delete'
  })
}
