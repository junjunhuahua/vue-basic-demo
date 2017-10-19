import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
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
// 全局路由钩子，备用
// myRouter.beforeEach((to, from, next) => {
//   let nowUrl = to.fullPath
//   next()
// })

export default myRouter
