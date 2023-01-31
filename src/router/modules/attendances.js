/*
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2023-01-04 10:51:56
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2023-01-31 12:06:39
 * @FilePath: \bg-system\src\router\modules\attendances.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Layout from '@/layout'

const attendRouter = {
  path: '/attendances',
  component: Layout,
  name: 'attendances',
  children: [
    {
      path: '',
      component: () => import('@/views/attendances'),
      name: 'attendances',
      meta: {
        title: '考勤',
        icon: 'excel' }
    },
    {
      path: 'archiving',
      component: () => import('@/views/attendances/historical'),
      name: 'archiving',
      hidden: true,
      meta: {
        title: '归档'
      }
    },
    {
      path: 'report/:month',
      component: () => import('@/views/attendances/report'),
      name: 'reports',
      hidden: true,
      meta: {
        title: '报表'
      }
    }
  ]
}
export default attendRouter
