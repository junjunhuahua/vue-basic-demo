<template>
  <div class="contact-edit">
    <el-form ref="contactForm" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="form.sex" placeholder="请选择性别">
          <el-option label="男" value="male"></el-option>
          <el-option label="女" value="female"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所在地">
        <el-select v-model="form.area" placeholder="请选择所在地">
          <el-option label="上海" value="shanghai"></el-option>
          <el-option label="北京" value="beijing"></el-option>
          <el-option label="广州" value="guangzhou"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="手机" prop="mobile">
        <el-input v-model="form.mobile"></el-input>
      </el-form-item>
      <el-form-item label="宅电">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="常用联系人">
        <el-switch on-text="" off-text="" v-model="form.always"></el-switch>
      </el-form-item>
      <el-form-item label="关系">
        <el-checkbox-group v-model="form.relationship">
          <el-checkbox label="家人" name="type"></el-checkbox>
          <el-checkbox label="朋友" name="type"></el-checkbox>
          <el-checkbox label="同学" name="type"></el-checkbox>
          <el-checkbox label="同事" name="type"></el-checkbox>
          <el-checkbox label="客户" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('contactForm')">{{ btnName }}</el-button>
        <el-button @click="cancelForm">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data () {
      let nameValid = (rule, value, callback) => {
        if (!value) {
          callback(new Error('姓名不能为空'))
        } else {
          callback()
        }
      }
      let mobileValid = (rule, value, callback) => {
        let phonePattern = /(^\s*$)|(^[1][3,4,5,7,8][0-9]{9}$)/
        if (value && !phonePattern.test(value)) {
          callback(new Error('手机号格式不正确'))
        } else {
          callback()
        }
      }
      return {
        type: '', // 控制是否是新建
        btnName: '',
        listData: {},
        form: {
          name: '',
          phone: '',
          sex: '',
          area: '',
          always: false,
          relationship: [],
          mobile: '',
          id: '',
          desc: ''
        },
        rules: {
          name: [{validator: nameValid, trigger: 'blur'}],
          mobile: [
//            {required: true, message: '手机号不能为空', trigger: 'blur'},
            {validator: mobileValid, trigger: 'blur'}
          ]
        }
      }
    },
    // 组件加载后的钩子
    mounted: function () {
      this.checkPageStatus(this.$route.query.id)
    },
    // 路由在组件中的钩子
    beforeRouteUpdate: function (to, from, next) {
      this.checkPageStatus(to.query.id)
      next()
    },
    methods: {
      // 检查页面是新建还是编辑
      checkPageStatus: function (id) {
        let url = '/api/test/user/user'
        let vm = this

        if (id) {
          this.type = 'edit'
          this.btnName = '修改'
          this.$ajax.post(url, {id: id}).then(function (res) {
            vm.form = res.data.data
          })
        } else {
          this.type = 'add'
          this.btnName = '新建'
        }
      },
      // 取消按钮事件
      cancelForm: function () {
        this.$router.push('/contact')
      },
      // 确定按钮事件
      onSubmit: function (formName) {
        let vm = this
        let url = '/api/test/user/add'
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let data = this.form || {}
            this.$ajax.post(url, data).then(function (res) {
              vm.$router.push('/contact')
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .contact-edit
    text-align left

</style>
