<template>
  <div class="contact-list">
    <div class="contact-list-header">
      <el-button @click="goToNew" type="primary">新增联系人</el-button>
    </div>
    <div class="contact-list-content">
      <template>
        <div class="contact-list-wrap">
          <h3>高级检索</h3>
          <el-form ref="contactSearch" :model="searchParams" :inline=true>
            <el-form-item label="姓名">
              <el-input v-model="searchParams.name" placeholder="请输入需要检索的姓名"></el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary" size="mini" round @click="contactSearch('contactSearch')">搜索</el-button>
        </div>
        <div class="contact-list-wrap">
          <h3>联系人列表</h3>
          <el-table
            :data="listData"
            style="width: 100%"
            @row-click="viewContact"
            :default-sort="{prop: 'name', order: 'descending'}"
          >
            <el-table-column
              label="姓名"
              prop="name"
              sortable
              width="180">
            </el-table-column>
            <el-table-column
              prop="sex"
              label="性别"
              sortable
              :formatter="sexFormatter"
              width="180">
            </el-table-column>
            <el-table-column
              prop="mobile"
              label="手机">
            </el-table-column>
            <el-table-column
              label="功能">
              <template slot-scope="scope">
                <el-button size="mini" type="primary" @click.stop="editContact(scope)">编辑</el-button>
                <el-button size="mini" @click.stop="deleteContact(scope)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </template>
    </div>
    <contact-view ref="contactView" :viewData="curData" :viewShow.sync="viewShow"></contact-view>
  </div>
</template>

<script>
  import contactView from './View.vue'

  export default {
    data () {
      return {
        listData: null,
        curData: {},
        viewShow: false,
        searchParams: {
          name: ''
        }
      }
    },
    components: {
      contactView
    },
    mounted () {
      let vm = this
      let url = '/api/test/user/users'
      this.$ajax.post(url).then(function (res) {
        vm.listData = res.data.data
      })
    },
    methods: {
      goToNew: function () {
        this.$router.push('/contact/edit')
      },
      sexFormatter: function (row) {
        let val = row.sex
        if (val === 'male') {
          return '男'
        } else if (val === 'female') {
          return '女'
        }
      },
      // 删除联系人
      deleteContact: function (res) {
        let data = res.row
        let vm = this
        this.$confirm('此操作将永久删除该联系人, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          callback: (action) => {
            if (action === 'confirm') {
              let url = '/api/test/user/delete'
              vm.$ajax.post(url, {id: data.id}).then(function () {
                let idx = vm.listData.findIndex(function (val) {
                  return val.id === res.row.id
                })
                vm.$delete(vm.listData, idx)
              })
            }
          }
        })
      },
      editContact: function (res) {
        let data = res.row
        this.$router.push({
          path: '/contact/edit', query: {id: data.id}
        })
      },
      viewContact: function (row) {
        this.viewShow = true
        this.curData = row
      },
      // 搜索联系人
      contactSearch: function () {
        let vm = this
        let url = '/api/test/user/users'
        this.$ajax.post(url, vm.searchParams).then(function (res) {
          vm.listData = res.data.data
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .contact-list-header
    text-align right
    .el-button
      display inline-block
      text-align center

  .contact-list-content
    text-align left

  .contact-list-wrap
    margin-top 20px
    border 1px solid #d3d3d3
    h3
      margin 0;
      padding 10px
      font-size 18px
      color #333
      border-bottom 1px solid #d3d3d3
    .el-form, .el-button.is-round
      margin 10px
    .el-form-item
      margin 0
    .el-table th
      text-align: center


</style>
