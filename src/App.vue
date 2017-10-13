<template>
  <div id="app">
    <div class="app-left">
      <el-row class="tac">
        <el-col>
          <el-menu :default-active="menuIndex" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                   background-color="#545c64" text-color="#fff" :unique-opened="menuUniqueOpen" :router="menuRouter"
                   active-text-color="#ffd04b">
            <h3>我的应用</h3>
            <template v-for="(item, index) in menuData">
              <!-- 此处的index需显示转换为string，否则会报warn -->
              <el-submenu :index="'' + (index + 1)">
                <template slot="title">{{ item.name }}</template>
                <template v-for="(subItem, i) in item.value">
                  <!-- 此处index格式为父级的index加上下划线加上当前的index，index都需加1 -->
                  <router-link tag="span" :to="subItem.path">
                    <el-menu-item :index="subItem.name">{{ subItem.title }}</el-menu-item>
                  </router-link>
                </template>
              </el-submenu>
            </template>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="app-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import menuData from './config'

  export default {
    name: 'app',
    data () {
      return {
        menuData,
        menuIndex: '', // 菜单当前所在位置
        menuUniqueOpen: true, // 菜单项是否唯一开启
        menuRouter: true // 是否开启路由模式
      }
    },
    mounted: function () {
      let winHeight = window.innerHeight
      let $menu = document.querySelector('.app-left')
      $menu.style.height = winHeight + 'px'
    },
    watch: {
      '$route' (to) {
        // 对路由变化作出响应...
//        console.log(to)
        this.menuIndex = to.name
      }
    },
    methods: {
      handleOpen: function () {
//        console.log(1)
      },
      handleClose: function () {
//        console.log(2)
      }
    }
  }
</script>

<style>
  .clearfix {
    clear: both;
  }

  .clearfix:after {
    content: '';
    display: block;
    visibility: hidden;
    height: 0;
    font-size: 0;
    clear: both;
  }

  #app {
    display: flex;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #333;
    width: 100%;
  }

  .app-left {
    width: 250px;
  }

  .app-right {
    flex: 1;
    /*margin-left: 250px;*/
    padding: 20px 30px;
  }

  .app-left h3 {
    margin-left: 10px;
    color: #fff;
  }


  .app-left .el-menu-vertical-demo {
    height: 100%;
    text-align: left;
  }

  .app-left .el-row {
    height: 100%;
  }

  .app-left .el-col {
    height: 100%;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */
  {
    opacity: 0
  }
</style>
