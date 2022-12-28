/*
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2022-12-28 16:28:07
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2022-12-28 17:09:40
 * @FilePath: \bg-system\src\utils\request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'

// 创建一个axios的实例
const service = axios.create()
// 请求拦截器
service.interceptors.request.use()
// 响应拦截器
service.interceptors.response.use()
// 导出axios实例
export default service
