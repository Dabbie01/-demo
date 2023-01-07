<!--
 * @Author: Dabbie 2310734576@qq.com
 * @Date: 2023-01-05 17:02:14
 * @LastEditors: Dabbie 2310734576@qq.com
 * @LastEditTime: 2023-01-07 14:01:20
 * @FilePath: \bg-system\src\views\departments\components\add-dept.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- 放置弹层组件 -->
  <!-- 新增部门的弹层 -->
  <el-dialog title="新增部门" :visible="showDialog" @close="btnCancel">
    <!-- 表单组件  el-form   label-width设置label的宽度   -->
    <!-- 匿名插槽 -->
    <el-form
      ref="deptForm"
      label-width="120px"
      :model="formData"
      :rules="rules"
    >
      <el-form-item label="部门名称" prop="name">
        <el-input
          v-model="formData.name"
          style="width: 80%"
          placeholder="1-50个字符"
        />
      </el-form-item>
      <el-form-item label="部门编码" prop="code">
        <el-input
          v-model="formData.code"
          style="width: 80%"
          placeholder="1-50个字符"
        />
      </el-form-item>
      <el-form-item label="部门负责人" prop="manager">
        <el-select
          v-model="formData.manager"
          style="width: 80%"
          placeholder="请选择"
          @focus="getEmployeeSimple"
        >
          <!-- 需要循环生成选项  这里做一下简单的处理 显示的是用户名 存的也是用户名-->
          <el-option
            v-for="item in peoples"
            :key="item.id"
            :label="item.username"
            :value="item.username"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="部门介绍" prop="introduce">
        <el-input
          v-model="formData.introduce"
          style="width: 80%"
          placeholder="1-300个字符"
          type="textarea"
          :rows="3"
        />
      </el-form-item>
    </el-form>
    <!-- el-dialog有专门放置底部操作栏的 插槽  具名插槽 -->
    <el-row slot="footer" type="flex" justify="center">
      <!-- 列被分为24 -->
      <el-col :span="6">
        <el-button type="primary" size="middle" @click="btnOK">确定</el-button>
        <el-button size="middle" @click="btnCancel">取消</el-button>
      </el-col>
    </el-row>
  </el-dialog>
</template>

<script>
import { getDepartments, addDepartments } from '@/api/departments'
import { getEmployeeSimple } from '@/api/employees'

export default {
  // 需要传入一个props变量来控制 显示或者隐藏
  props: {
    showDialog: {
      type: Boolean,
      default: false
    },
    // 当前操作的节点--父传子
    treeNode: {
      type: Object,
      default: null
    }
  },
  data() {
    // 现在定义一个函数 这个函数的目的是 去找 同级部门下 是否有重复的部门名称
    const checkNameRepeat = async(rule, value, callback) => {
      // value是部门名称 要去和同级部门下的部门去比较有没有相同的 有相同的不能过 没有相同的可以过
      // 先要获取最新的组织架构数据--{ depts } 解构result里的depts
      const { depts } = await getDepartments()
      // depts是所有的部门数据
      // 先找到同级部门下的所有子部门，然后再检验是否有同名部门，返回值是isRepeat
      const isRepeat = depts
        .filter((item) => item.pid === this.treeNode.id)
        .some((item) => item.name === value)
      isRepeat
        ? callback(new Error(`同级部门下已经有${value}的部门了！`))
        : callback()
    }

    // 检查编码重复
    const checkCodeRepeat = async(rule, value, callback) => {
      // 先要获取最新的组织架构数据
      const { depts } = await getDepartments()
      // 要求编码和所有部门编码不能有重复
      const isRepeat = depts.some((item) => item.code === value && value) // 这里加一个 value不为空 因为我们的部门有可能没有code
      isRepeat
        ? callback(new Error(`组织架构中已经有部门使用${value}编码了！`))
        : callback()
    }

    return {
      // 定义表单数据
      formData: {
        name: '', // 部门名称
        code: '', // 部门编码
        manager: '', // 部门管理者
        introduce: '' // 部门介绍
      },

      // 定义校验规则
      rules: {
        name: [
          { required: true, message: '部门名称不能为空', trigger: 'blur' },
          {
            min: 1,
            max: 50,
            message: '部门名称要求1-50个字符',
            trigger: 'blur'
          },
          { trigger: 'blur', validator: checkNameRepeat } // 自定义函数的形式校验
        ],
        code: [
          { required: true, message: '部门编码不能为空', trigger: 'blur' },
          {
            min: 1,
            max: 50,
            message: '部门编码要求1-50个字符',
            trigger: 'blur'
          },
          {
            trigger: 'blur',
            validator: checkCodeRepeat // 自定义函数的形式校验
          }
        ],
        manager: [
          { required: true, message: '部门负责人不能为空', trigger: 'blur' }
        ],
        introduce: [
          { required: true, message: '部门介绍不能为空', trigger: 'blur' },
          {
            trigger: 'blur',
            min: 1,
            max: 300,
            message: '部门介绍要求1-50个字符'
          }
        ]
      },

      // 接收获取的员工简单列表的数据
      peoples: []
    }
  },

  methods: {
    // 获取员工简单列表数据
    async getEmployeeSimple() {
      this.peoples = await getEmployeeSimple()
    },

    // 点击确定时触发
    btnOK() {
      // 手动校验
      this.$refs.deptForm.validate(async(isOK) => {
        if (isOK) {
          // 表示可以提交了--调用新增部门接口
          // 这里我们将id设置成了所需的pid
          await addDepartments({ ...this.formData, pid: this.treeNode.id }) // 调用新增接口 添加父部门的id
          // 告诉父组件
          this.$emit('addDepts') // 触发一个自定义事件
          // 此时应该去修改showDialog的值--实现点击确认后关闭弹层
          // 父子通信-我们这里使用sync方法
          // 子组件 update:固定写法 (update:props名称, 值)
          this.$emit('update:showDialog', false) // 触发事件
          // 关闭dialog的时候会触发el-dialog的close事件，那么就会调用btnCancel函数 所以此处无需单独重置数据
        }
      })
    },

    // 点击取消时触发
    btnCancel() {
      this.$refs.deptForm.resetFields() // 清除重置之前的校验 resetFields是element.ui的form表单中的事件
      this.$emit('update:showDialog', false) // 关闭弹层
    }
  }
}
</script>

<style scoped>
</style>
