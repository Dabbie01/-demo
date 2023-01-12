<!--
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2023-01-11 11:37:41
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2023-01-12 16:53:34
 * @FilePath: \bg-system\src\views\import\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <upload-excel :on-success="success" />
</template>

<script>
import { importEmployee } from '@/api/employees'
export default {
  methods: {
    async success({ header, results }) {
      if (this.type === 'user') {
        const userRelations = {
          入职日期: 'timeOfEntry',
          手机号: 'mobile',
          姓名: 'username',
          转正日期: 'correctionTime',
          工号: 'workNumber'
        }
        const arr = []
        // 遍历所有的数组
        results.forEach((item) => {
          // 需要将每一个条数据里面的中文都换成英文
          const userInfo = {}
          Object.keys(item).forEach((key) => {
            // key是当前的中文名 找到对应的英文名
            if (
              userRelations[key] === 'timeOfEntry' ||
              userRelations[key] === 'correctionTime'
            ) {
              userInfo[userRelations[key]] = new Date(
                this.formatDate(item[key], '/')
              ) // 只有这样, 才能入库
              return
            }
            userInfo[userRelations[key]] = item[key]
          })
          // 最终userInfo变成了全是英文
          arr.push(userInfo)
        })
        await importEmployee(arr)
        this.$message.success('导入成功')
      }
      this.$router.back() // 回到上一页
    },
    formatDate(numb, format) {
      const time = new Date((numb - 1) * 24 * 3600000 + 1)
      time.setYear(time.getFullYear() - 70)
      const year = time.getFullYear() + ''
      const month = time.getMonth() + 1 + ''
      const date = time.getDate() - 1 + ''
      if (format && format.length === 1) {
        return year + format + month + format + date
      }
      return (
        year +
        (month < 10 ? '0' + month : month) +
        (date < 10 ? '0' + date : date)
      )
    }
  }
}
</script>

<style>
</style>

