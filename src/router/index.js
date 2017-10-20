import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
let loadingInstance
let myRouter = new VueRouter({
  routes: [
    {
      path: '*',
      component: () => import('../components/NotFoundComponent.vue')
    },
    {
      path: '/',
      redirect: '/contact'
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../components/contact/List.vue')
    },
    {
      path: '/contact/edit',
      name: 'Contact',
      component: () => import('../components/contact/Edit.vue')
    },
    {
      path: '/account',
      name: 'Account',
      component: () => import('../components/account/list.vue')
    }
  ]
})
// 路由切换时的loading效果
myRouter.beforeEach((to, from, next) => {
  loadingInstance = this.a.app.$loading()
  next()
})

myRouter.afterEach(() => {
  setTimeout(function () {
    loadingInstance.close()
  }, 0)
})

export default myRouter
