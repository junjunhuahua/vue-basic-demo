import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
let myRouter = new VueRouter({
  routes: [
    {
      path: '*',
      // component: resolve => { require(['../components/NotFoundComponent.vue'], resolve) }
      component: () => import('../components/NotFoundComponent.vue')
    },
    {
      path: '/',
      redirect: '/contact'
    },
    {
      path: '/contact',
      name: 'Contact',
      // component: resolve => { require(['../components/Hello.vue'], resolve) }
      component: () => import('../components/contact/List.vue')
    },
    {
      path: '/contact/edit',
      name: 'Contact',
      // component: resolve => { require(['../components/Cat.vue'], resolve) }
      component: () => import('../components/contact/Edit.vue')
    },
    {
      path: '/contact/view',
      name: 'Contact',
      // component: resolve => { require(['../components/Cat.vue'], resolve) }
      component: () => import('../components/contact/View.vue')
    },
    {
      path: '/account',
      name: 'Account',
      // component: resolve => { require(['../components/Dog.vue'], resolve) }
      component: () => import('../components/account/list.vue')
    }
  ]
})
// 全局路由钩子，备用
// myRouter.beforeEach((to, from, next) => {
//   let nowUrl = to.fullPath
//   console.log(nowUrl)
//   next()
// })

export default myRouter
