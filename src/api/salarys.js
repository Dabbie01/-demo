/*
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2023-01-25 16:39:48
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2023-01-31 12:01:58
 * @FilePath: \bg-system\src\api\salarys.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request'

export function getSalarysList(data) {
  return request({
    url: '/salarys/list',
    data,
    method: 'post'
  })
}

export function getTips(yearMonth) {
  return request({
    url: `/salarys/tips/${yearMonth}`
  })
}

export function getSettings() {
  return request({
    url: '/salarys/settings'
  })
}

export function getCompanySetting() {
  return request({
    url: '/salarys/company-settings'
  })
}
export function saveSettings(data) {
  return request({
    url: '/salarys/settings',
    method: 'post', data
  })
}

export function getSalaryDetail(userId) {
  return request({
    url: `/salarys/modify/${userId}`
  })
}
export function changeSalary(data) {
  return request({
    url: `/salarys/modify/${data.userId}`,
    method: 'post',
    data
  })
}
export function initSalary(data) {
  return request({
    url: `/salarys/init/${data.userId}`,
    method: 'post',
    data
  })
}
export function getArchivingList(params) {
  return request({
    url: `/salarys/reports/${params.year}`,
    params
  })
}
export function getArchivingCont(params) {
  return request({
    url: `/salarys/reports/${params.yearMonth}`,
    params
  })
}
export function newReport(data) {
  return request({
    url: `/salarys/reports/${data.yearMonth}/newReport`,
    method: 'put',
    data
  })
}
export function getArchivingExport(params) {
  return request({
    url: `/salarys/reports/${params.yearMonth}/export`,
    params
  })
}
export function getArchivingFirst(params) {
  return request({
    url: `/salarys/reports/${params.yearMonth}/first`,
    params
  })
}
export function getArchivingArchive(data) {
  return request({
    url: `/salarys/reports/${data.yearMonth}/archive`,
    data,
    method: 'post'
  })
}
