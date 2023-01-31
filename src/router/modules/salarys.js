/*
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2023-01-04 10:51:56
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2023-01-31 12:06:48
 * @FilePath: \bg-system\src\router\modules\salarys.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Layout from '@/layout'

const salaryRouter = {
  path: '/salarys',
  component: Layout,
  name: 'salarys',
  children: [
    {
      path: '',
      component: () => import('@/views/salarys'),
      name: 'salarys',
      meta: {
        title: '工资',
        icon: 'money'
      }
    },
    {
      path: 'setting',
      component: () => import('@/views/salarys/setting'),
      name: 'salarysSetting',
      hidden: true,
      meta: {
        title: '设置'
      }
    },
    {
      path: 'details/:yearMonth/:id',
      component: () => import('@/views/salarys/detail'),
      name: 'salarysDetails',
      hidden: true,
      meta: {
        title: '详情'
      }
    },
    {
      path: 'historicalArchiving',
      component: () => import('@/views/salarys/historical'),
      name: 'salarysHistorical',
      hidden: true,
      meta: {
        title: '历史归档'
      }
    },
    {
      path: 'monthStatement',
      component: () => import('@/views/salarys/month'),
      name: 'salarysMonthStatement',
      hidden: true,
      meta: {
        title: '月报表'
      }
    }
  ]
}
export default salaryRouter
