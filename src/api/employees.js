/*
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2023-01-06 16:18:59
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2023-01-06 16:20:19
 * @FilePath: \bg-system\src\api\employees.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request'

/**
 *  获取员工的简单列表--此处只需要将其用到新增部门处选择负责人区域，所以只需要名字即可
 * **/
export function getEmployeeSimple() {
  return request({
    url: '/sys/user/simple'
  })
}

