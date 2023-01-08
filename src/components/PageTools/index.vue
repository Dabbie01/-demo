<!--
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2023-01-08 16:46:29
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2023-01-08 17:03:51
 * @FilePath: \bg-system\src\components\PageTools\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-card class="page-tools">
    <!-- 是把整体一分为二：一左一右 一行el-row 两列el-col -->
    <el-row type="flex" justify="space-between" align="middle">
      <!-- 前插槽 -->
      <el-col>
        <div v-if="showBefore" class="before">
          <!-- 图标随着showBefore为true才显示 -->
          <i class="el-icon-info" />
          <!-- 定义前面的插槽 --具名插槽：有名字的插槽    匿名插槽：无名字的 -->
          <slot name="before" />
        </div>
      </el-col>
      <!-- 后插槽 -->
      <el-col>
        <el-row type="flex" justify="end">
          <!-- 定义后面的插槽 -->
          <slot name="after" />
        </el-row>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  // 组件可以显示左侧内容，也可以显示右侧内容 如果左侧内容不传，那么图标也不应该显示
//   使用 props 组件传属性
  props: {
    showBefore: {
      type: Boolean,
      default: false // 默认不显示
    }
  }
}
</script>

<style lang='scss'>
.page-tools {
  margin: 10px 0;
  .before {
    line-height: 34px;
    i {
      margin-right: 5px;
      color: #409eff;
    }
    display: inline-block;
    padding: 0px 10px;
    border-radius: 3px;
    border: 1px solid rgba(145, 213, 255, 1);
    background: rgba(230, 247, 255, 1);
  }
}
</style>

