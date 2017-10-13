<template>
  <div>
    <p>{{ greeting }} world!</p>
    <router-link to="/maa">go to maa</router-link>
    <router-link to="/bar">go to bar</router-link>
  </div>
</template>

<script>
  //    import Cat from './Cat.vue'

  const Foo = { template: '<div>foo</div>' }
  const Bar = { template: '<div>bar</div>' }

  const routes = [
    {path: '/foo', component: Foo},
    {path: '/bar', component: Bar}
  ]

  const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
  })

  const app = new Vue({
    router
  }).$mount('#app')

  export default {
    data () {
      return {
        greeting: 'hello'
      }
    }
  }
</script>

<style scoped>
  p {
    font-size: 22px;
    text-align: center;
  }

</style>
