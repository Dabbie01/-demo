/*
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2023-01-25 16:35:49
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2023-01-31 12:07:07
 * @FilePath: \bg-system\src\router\modules\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Layout from '@/layout'

export default {
  path: '/users',
  component: Layout,
  hidden: true,
  name: 'user',
  children: [
    {
      path: '/users/approvals',
      component: () => import('@/views/users/approvals'),
      name: 'usersApprovals',
      hidden: true,
      meta: {
        title: '用户'
      }
    },
    {
      path: '/users/info',
      component: () => import('@/views/users/info'),
      name: 'myInfo',
      hidden: true,
      meta: {
        title: '我的信息'
      }
    }
  ]
}
