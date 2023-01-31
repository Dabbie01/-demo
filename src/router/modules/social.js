/*
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2023-01-04 10:51:56
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2023-01-31 12:06:59
 * @FilePath: \bg-system\src\router\modules\social.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Layout from '@/layout'

export default {
  path: '/social_securitys',
  component: Layout,
  name: 'social_securitys',
  children: [
    {
      path: '',
      component: () => import('@/views/social'),
      name: 'social_securitys',
      meta: {
        title: '社保',
        icon: 'table'

      }
    },
    // 报表
    {
      path: 'detail/:id',
      hidden: true,
      component: () => import('@/views/social/detail'),
      name: 'socialDetail',
      meta: {
        title: '社保'
      }
    },
    // 历史归档
    {
      path: 'historicalArchiving',
      hidden: true,
      component: () => import('@/views/social/historical'),
      name: 'socialHistorical',
      meta: {
        title: '历史归档'
      }
    },
    // 月报表
    {
      path: 'monthStatement',
      component: () => import('@/views/social/month'),
      name: 'socialMonthStatement',
      hidden: true,
      meta: {
        title: '当月报表'
      }
    }
  ]
}
