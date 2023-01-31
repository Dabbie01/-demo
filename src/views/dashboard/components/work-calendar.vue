<!--
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2023-01-31 10:41:23
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2023-01-31 11:19:35
 * @FilePath: \bg-system\src\views\dashboard\components\work-calendar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- 工作日历 -->
  <div>
    <el-row type="flex" justify="end">
      <!-- 年 取年的前五年和后五年 -->
      <el-select v-model="currentYear" size="small" style="width: 120px" @change="dateChange">
        <el-option v-for="item in yearList" :key="item" :label="item" :value="item">{{ item }}</el-option>
      </el-select>
      <!-- 月 -->
      <el-select v-model="currentMonth" size="small" style="width: 120px;margin-left:10px" @change="dateChange">
        <el-option v-for="item in 12" :key="item" :label="item" :value="item">{{ item }}</el-option>
      </el-select>
    </el-row>
    <el-calendar v-model="currentDate">
      <!-- date是当前单元格的日期，data是对象 对象里有要显示的day-->
      <template v-slot:dateCell="{ date, data }" class="content">
        <div class="date-content">
          <span class="text"> {{ data.day | getDay }}</span>
          <span v-if="isWeek(date)" class="rest">休</span>
        </div>
      </template>
    </el-calendar>
  </div>
</template>

<script>
export default {
  // 过滤器 ： 用来处理日期
  filters: {
    getDay(value) {
      const day = value.split('-')[2]
      return day.startsWith('0') ? day.substr(1) : day
    }
  },
  props: {
    startDate: {
      type: Date,
      //   回调函数式的返回值
      default: () => new Date()
    } // 开始时间
  },
  data() {
    return {
      currentMonth: null, // 当前月份
      currentYear: null, // 当前年份
      currentDate: null,
      yearList: [] // 要遍历的年的数组
    }
  },
  // 初始化事件
  created() {
    //    处理起始时间
    // 组件要求起始时间必须是 周一开始 以一个月为开始
    this.currentMonth = this.startDate.getMonth() + 1
    this.currentYear = this.startDate.getFullYear()
    // 根据当前的年 生成可选年份 前后各加5年
    this.yearList = Array.from(Array(11), (value, index) => this.currentYear + index - 5)
    // 计算 当年当月的第一个周一 再加上 四周之后的一个月月份
    this.dateChange()
  },
  methods: {
    // 是否是休息日
    isWeek(value) {
      return value.getDay() === 6 || value.getDay() === 0
    },
    // 年月份改变之后
    dateChange() {
      const year = this.currentYear
      const month = this.currentMonth
      this.currentDate = new Date(`${year}-${month}-1`) // 以当前月的1号为起始
    }
  }
}
</script>

<style  scoped>
/deep/ .el-calendar-day {
 height:  auto;
}
/deep/ .el-calendar-table__row td,/deep/ .el-calendar-table tr td:first-child,  /deep/ .el-calendar-table__row td.prev{
 border:none;
}
.date-content {
 height: 40px;
 text-align: center;
 line-height: 40px;
 font-size: 14px;
}
.date-content .rest {
 color: #fff;
 border-radius: 50%;
 background: rgb(250, 124, 77);
 width: 20px;
 height: 20px;
 line-height: 20px;
 display: inline-block;
 font-size: 12px;
 margin-left: 10px;
}
.date-content .text{
 width: 20px;
 height: 20px;
 line-height: 20px;
display: inline-block;

}
/deep/ .el-calendar-table td.is-selected .text{
  background: #409eff;
  color: #fff;
  border-radius: 50%;
}
/deep/ .el-calendar__header {
  display: none
}
</style>

