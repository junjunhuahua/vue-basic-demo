<template>
  <div class="contact-view">
    <el-dialog :before-close="closePop" ref="myDialog" :visible="viewShow">
      <el-form :model="viewData" label-width="60px">
        <el-form-item label="姓名" prop="name">
          <el-input :readonly="true" v-model="viewData.name"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select disabled v-model="viewData.sex" placeholder="请选择性别">
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="female"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所在地">
          <el-select disabled v-model="viewData.area" placeholder="请选择所在地">
            <el-option label="上海" value="shanghai"></el-option>
            <el-option label="北京" value="beijing"></el-option>
            <el-option label="广州" value="guangzhou"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="手机">
          <el-input :readonly="true" v-model="viewData.mobile"></el-input>
        </el-form-item>
        <el-form-item label="宅电">
          <el-input :readonly="true" v-model="viewData.phone"></el-input>
        </el-form-item>
        <el-form-item label="常用联系人">
          <el-switch disabled on-text="" off-text="" v-model="viewData.always"></el-switch>
        </el-form-item>
        <el-form-item label="关系">
          <el-checkbox-group disabled v-model="viewData.relationship">
            <el-checkbox label="家人" name="type"></el-checkbox>
            <el-checkbox label="朋友" name="type"></el-checkbox>
            <el-checkbox label="同学" name="type"></el-checkbox>
            <el-checkbox label="同事" name="type"></el-checkbox>
            <el-checkbox label="客户" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="备注">
          <el-input :readonly="true" type="textarea" v-model="viewData.desc"></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    props: ['viewShow', 'viewData'],
    methods: {
      closePop: function () {
        // 需手动关闭弹窗,找到父组件中调用的地方进行事件的触发
        this.$parent.$refs.contactView.$emit('update:viewShow', false)
      }
    }

  }
</script>

<style scoped>
  .contact-view {
    text-align: left;
  }
</style>
