<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">

      <div class="title-container">
        <h3 class="title">后台登录系统</h3>
      </div>

      <el-form-item prop="mobile">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="username"
          v-model="loginForm.mobile"
          placeholder="请输入手机号"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="请输入密码"
          name="password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>

      <el-button class="loginBtn" :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登 录</el-button>

      <div class="tips">
        <span style="margin-right:20px;">账号: 13800000002</span>
        <span> 密码: 123456</span>
      </div>

    </el-form>
  </div>
</template>

<script>
// 单独封了一个validate文件，用来写校验规则
import { validMobile } from '@/utils/validate'
import { mapActions } from 'vuex' // 引入vuex的辅助函数

export default {
  name: 'Login',
  data() {
    // 自定义校验函数
    const validateMobile = function(rule, value, callback) {
      // 校验value
      validMobile(value) ? callback() : callback(new Error('手机号格式不正确'))
    }

    return {
      loginForm: {
        mobile: '13800000002',
        password: '123456'
      },
      loginRules: {
        mobile: [{ required: true, trigger: 'blur', message: '手机号不能为空' }, {
          trigger: 'blur', validator: validateMobile }],
        password: [{ required: true, trigger: 'blur', message: '密码不能为空' }, {
          min: 6, max: 16, trigger: 'blur', message: '密码的长度在6-16位之间' }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    // 引入action方法
    ...mapActions(['user/login']),
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      // ref 可以获取一个元素的dom对象
      // ref 作用到组件上的时候 可以获取该组件的实例--this
      // 表单的手动校验
      this.$refs.loginForm.validate(async isOK => {
        if (isOK) {
          try {
            // 登录之前打开loading -- 登录前面转圈的
            this.loading = true
            // 只有校验通过了 我们才去调用action
            await this['user/login'](this.loginForm)
            // 应该登录成功之后--强制等待await
            // async标记的函数实际上一个promise对象
            // await下面的代码 都是成功执行的代码
            this.$router.push('/')
          } catch (error) {
            console.log(error)
          } finally {
            //  finally --不论执行try 还是catch  都去关闭转圈
            this.loading = false
          }
        }
      })
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:rgb(36, 28, 184);
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.8); // 输入登录表单的背景色
    border-radius: 5px;
    color: #454545;
  }
  // 设置错误提示信息颜色
  .el-form-item__error {
    color: #fff
  }
  // 设置登录按钮
  .loginBtn {
    background: rgb(36, 28, 184);
    height: 50px;
    line-height: 25px;
    font-size: 24px;
}
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  background: url('~@/assets/common/login-bg.png') no-repeat; // 设置背景图片
  background-position: center; // 将图片位置设置为充满整个屏幕
  background-size: 100%;
  min-height: 100%;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 30px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
