/*
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2022-12-28 16:28:07
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2023-02-01 11:21:35
 * @FilePath: \bg-system\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import Router from 'vue-router'

// 引入多个模块的规则
import approvalsRouter from './modules/approvals'
import departmentsRouter from './modules/departments'
import employeesRouter from './modules/employees'
import permissionRouter from './modules/permission'
import attendancesRouter from './modules/attendances'
import salarysRouter from './modules/salarys'
import settingRouter from './modules/setting'
import socialRouter from './modules/social'
import userRouter from './modules/user'
Vue.use(Router)

/* Layout */
import Layout from '@/layout'

// 静态路由
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true // hidden为true时，表示该路由不显示在左侧菜单中
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },
  {
    path: '/import',
    component: Layout,
    hidden: true, // 隐藏在左侧菜单中
    children: [{
      path: '', // 二级路由path什么都不写 表示二级默认路由
      component: () => import('@/views/import')
    }]
  },
  userRouter // 放置一个都可以访问的路由

  // 404 page must be placed at the end !!!
]

// 动态路由变量
// 这里导出变量，方便后面做权限时用到
export const asyncRoutes = [
  approvalsRouter,
  departmentsRouter,
  employeesRouter,
  permissionRouter,
  attendancesRouter,
  salarysRouter,
  settingRouter,
  socialRouter
]

const createRouter = () => new Router({
  mode: 'history', // require service support
  base: '/bg/', // 配置项目的基础地址
  scrollBehavior: () => ({ y: 0 }),
  routes: [...constantRoutes, ...asyncRoutes] // 临时合并所有的路由
})

const router = createRouter() // 实例化路由

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
