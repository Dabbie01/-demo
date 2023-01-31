<!--
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2023-01-31 16:57:34
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2023-01-31 17:13:28
 * @FilePath: \bg-system\src\components\ScreenFull\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- 放置一个图标 -->
  <div>
    <!-- 放置一个svg的图标 -->
    <svg-icon
      icon-class="fullscreen"
      style="color: #fff; width: 20px; height: 20px"
      @click="changeScreen"
    />
  </div>
</template>

<script>
import ScreenFull from 'screenfull'
export default {
  methods: {
    //   改变全屏
    changeScreen() {
      if (!ScreenFull.isEnabled) {
        // 此时全屏不可用
        this.$message.warning('此时全屏组件不可用')
        return
      }
      // document.documentElement.requestFullscreen()  原生js调用
      //   如果可用 就可以全屏
      ScreenFull.toggle() // 可以全屏也可以退出全屏
    }
  }
}
</script>

  <style>
</style>

