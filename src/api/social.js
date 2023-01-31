/*
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2023-01-25 16:39:48
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2023-01-31 12:02:20
 * @FilePath: \bg-system\src\api\social.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request'

export function getArchivingCont(params) {
  return request({
    url: `/social_securitys/historys/${params.month}`,
    params
  })
}

export function getArchivingList(data) {
  return request({
    url: `/social_securitys/historys/${data.year}/list`,
    data
  })
}

export function newReport(data) {
  return request({
    url: `/social_securitys/historys/${data.yearMonth}/newReport`,
    method: 'put',
    data
  })
}

export function getHistorysData(data) {
  return request({
    url: `/social_securitys/historys/archiveDetail/${data.userId}/${data.yearMonth}`,
    data
  })
}

export function getArchivingExport(data) {
  return request({
    url: `/social_securitys/historys/${data.yearMonth}/export`,
    data
  })
}

export function getArchivingFirst(data) {
  return request({
    url: `/social_securitys/historys/${data.yearMonth}/first`,
    data
  })
}

export function getSocialList(data) {
  return request({
    url: '/social_securitys/list',
    method: 'post',
    data
  })
}

export function getArchivingArchive(data) {
  return request({
    url: `/social_securitys/historys/${data.yearMonth}/archive`,
    method: 'post',
    data
  })
}

export function getTips(yearMonth) {
  return request({
    url: `/social_securitys/tips/${yearMonth}`
  })
}
export function saveContent(data) {
  return request({
    url: `/social_securitys/${data.userId}`,
    method: 'put',
    data
  })
}
export function getContent(userId) {
  return request({
    url: `/social_securitys/${userId}`
  })
}
export function getPaymentItemList(id) {
  return request({
    url: `/social_securitys/payment_item/${id}`
  })
}
export function getSettings() {
  return request({
    url: '/social_securitys/settings'
  })
}
export function saveSettings(data) {
  return request({
    url: '/social_securitys/settings',
    data,
    method: 'post'
  })
}
