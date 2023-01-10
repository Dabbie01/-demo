<!--
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2023-01-04 10:52:22
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2023-01-10 15:20:55
 * @FilePath: \bg-system\src\views\approvals\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="dashboard-container">
    <div class="app-container">
      <page-tools :show-before="true">
        <!-- 左侧记录总记录数 -->
        <span slot="before">共{{ page.total }}条记录</span>
        <!-- 右侧显示按钮 -->
        <template slot="after">
          <el-button size="small" type="warning">导入</el-button>
          <el-button size="small" type="danger">导出</el-button>
          <el-button size="small" type="primary" @click="showDialog = true">新增员工</el-button>
        </template>
      </page-tools>
      <!-- 放置表格和分页 -->
      <el-card>
        <el-table v-loading="loading" border :data="list">
          <!-- sortable 排序 -->
          <el-table-column
            label="序号"
            align="center"
            sortable=""
            type="index"
          />
          <el-table-column
            label="姓名"
            align="center"
            sortable=""
            prop="username"
          />
          <el-table-column
            label="工号"
            align="center"
            sortable=""
            prop="workNumber"
          />
          <el-table-column
            label="聘用形式"
            align="center"
            sortable=""
            prop="formOfEmployment"
            :formatter="formatEmployment"
          />
          <el-table-column
            label="部门"
            align="center"
            sortable=""
            prop="departmentName"
          />
          <!-- 作用域插槽 + 过滤器 -->
          <el-table-column
            label="入职时间"
            align="center"
            sortable=""
            prop="timeOfEntry"
          >
            <template slot-scope="{ row }">{{
              row.timeOfEntry | formatDate
            }}</template>
          </el-table-column>
          <el-table-column
            label="账户状态"
            align="center"
            sortable=""
            prop="enableState"
          >
            <template slot-scope="{ row }">
              <!-- 根据当前状态来确定 是否打开开关 -->
              <el-switch :value="row.enableState === 1" />
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            align="center"
            sortable=""
            fixed="right"
            width="280"
          >
            <template slot-scope="{ row }">
              <el-button type="text" size="small">查看</el-button>
              <el-button type="text" size="small">转正</el-button>
              <el-button type="text" size="small">调岗</el-button>
              <el-button type="text" size="small">离职</el-button>
              <el-button type="text" size="small">角色</el-button>
              <el-button
                type="text"
                size="small"
                @click="deleteEmployee(row.id)"
              >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页组件 -->
        <el-row
          type="flex"
          justify="center"
          align="middle"
          style="height: 60px"
        >
          <el-pagination
            layout="prev, pager, next"
            :page-size="page.size"
            :current-page="page.page"
            :total="page.total"
            @current-change="changePage"
          />
        </el-row>
      </el-card>
    </div>
    <!-- 放置新增组件 -->
    <AddDemployee :show-dialog.sync="showDialog" />
  </div>
</template>

<script>
import { getEmployeeList, delEmployee } from '@/api/employees'
import EmployeeEnum from '@/api/constant/employees'
import AddDemployee from './components/add-employee'

export default {
  components: {
    AddDemployee
  },
  data() {
    return {
      loading: false, // 显示遮罩层 进度条-- 解决刚加载时的卡顿
      list: [], // 接数据的
      page: {
        page: 1, // 当前页码
        size: 6,
        total: 0 // 总数
      },
      showDialog: false
    }
  },
  created() {
    this.getEmployeeList()
  },
  methods: {
    changePage(newPage) {
      this.page.page = newPage
      this.getEmployeeList()
    },
    async getEmployeeList() {
      this.loading = true
      const { total, rows } = await getEmployeeList(this.page)
      this.page.total = total
      this.list = rows
      this.loading = false
    },
    // 格式化聘用形式
    formatEmployment(row, column, cellValue, index) {
      // 要去找 1所对应的值
      const obj = EmployeeEnum.hireType.find((item) => item.id === cellValue)
      return obj ? obj.value : '未知'
    },
    // 点击删除按钮触发事件
    async deleteEmployee(id) {
      try {
        await this.$confirm('您确定删除该员工吗？')
        await delEmployee(id)
        this.getEmployeeList() // 重新拉取员工数据
        this.$message.success('删除员工成功')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
</style>

