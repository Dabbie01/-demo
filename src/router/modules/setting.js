/*
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2023-01-04 10:51:56
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2023-02-01 10:17:41
 * @FilePath: \bg-system\src\router\modules\employees.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// 导出属于员工的路由规则
import Layout from '@/layout'

// 每个子模块 其实 都是外层是layout  组件位于layout的二级路由里面
export default {
  path: '/setting', // 路径
  name: 'settings', // 给路由规则加一个name
  component: Layout, // 组件
  // 配置二级路的路由表
  children: [{
    path: '', // 这里当二级路由的path什么都不写的时候 表示该路由为当前二级路由的默认路由
    component: () => import('@/views/setting'),
    name: 'settings',
    // 路由元信息  其实就是存储数据的对象 我们可以在这里放置一些信息
    meta: {
      title: '公司设置', // meta属性的里面的属性 随意定义 但是这里为什么要用title呢， 因为左侧导航会读取我们的路由里的meta里面的title作为显示菜单名称
      icon: 'setting'
    }
  }]
}

