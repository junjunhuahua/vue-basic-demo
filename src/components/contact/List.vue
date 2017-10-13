<template>
  <div class="contact-list">
    <div class="contact-list-header">
      <el-button @click="goToNew" type="primary">新增联系人</el-button>
    </div>
    <div class="contact-list-content">
      <template>
        <el-form>
          <el-table
            :data="listNewData"
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
              <template scope="scope">
                <el-button size="mini" type="primary" @click.stop="editContact(scope)">编辑</el-button>
                <el-button size="mini" @click.stop="deleteContact(scope)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-form>
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
        viewShow: false
      }
    },
    components: {
      contactView
    },
    computed: {
      listNewData: function () {
        if (this.listData) {
          return Object.values(this.listData)
        } else {
          return []
        }
      }
    },
    mounted: function () {
      this.listData = this.utils.getLocalStorage('vueContact')
    },
    methods: {
      goToNew: function () {
        this.$router.push('/contact/edit')
      },
      sexFormatter: function (row) {
        let val = row.sex
        if (val === 'male') {
          return '男'
        } else {
          return '女'
        }
      },
      deleteContact: function (res) {
        let data = res.row
        this.$confirm('此操作将永久删除该联系人, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          callback: (action) => {
            console.log(action)
            if (action === 'confirm') {
              this.$delete(this.listData, data.id)
              this.utils.setLocalStorage('vueContact', this.listData)
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
//        this.$router.push({
//          path: '/contact/view', query: {id: row.id}
//        })
        this.viewShow = true
        this.curData = this.listData[row.id]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .contact-list-header {
    text-align: right;
  }

  .contact-list-header .el-button {
    display: inline-block;
    text-align: center;
  }

  .contact-list-content {
    text-align: left;
  }
</style>
