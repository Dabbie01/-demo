<!--
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2023-01-25 16:37:23
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2023-01-31 15:09:28
 * @FilePath: \bg-system\src\views\attendances\report.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card>
        <h2 class="centInfo">{{ this.$route.params.month }}月人事报表</h2>
        <el-tabs v-model="activeName" class="infoPosin">
          <el-tab-pane name="first">
            <span slot="label">考勤统计</span>
            <component
              :is="allList"
              :show-height="showHeight"
              :month="this.$route.params.month"
              @archivingReportForm="archivingReportForm"
            />
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>

<script>
import { fileUpdate } from '@/api/attendances'
import allList from './components/refort-list'
export default {
  name: 'RefortList',
  components: { allList },
  data() {
    return {
      allList: 'allList',
      activeName: 'first',
      showHeight: 40
    }
  },

  methods: {
    // 业务方法
    // 归档报表
    archivingReportForm() {
      this.$confirm(
        '报表归档将覆盖上一次归档记录，无法恢复。',
        '归档确认'
      ).then(async() => {
        await fileUpdate({ month: this.$route.params.month })
        this.$message.success('归档报表成功')
      })
    }
    // 界面交互
  }
}
</script>
