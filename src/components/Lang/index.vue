<!--
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2023-02-01 10:29:18
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2023-02-01 10:29:39
 * @FilePath: \bg-system\src\components\Lang\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-dropdown trigger="click" @command="changeLanguage">
    <!-- 这里必须加一个div -->
    <div>
      <svg-icon style="color: #fff; font-size: 20px" icon-class="language" />
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        command="zh"
        :disabled="'zh' === $i18n.locale"
      >中文</el-dropdown-item>
      <el-dropdown-item
        command="en"
        :disabled="'en' === $i18n.locale"
      >en</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import Cookie from 'js-cookie'
export default {
  methods: {
    changeLanguage(lang) {
      Cookie.set('language', lang) // 切换多语言
      this.$i18n.locale = lang // 设置给本地的i18n插件
      this.$message.success('切换多语言成功')
    }
  }
}
</script>

<style>
</style>
