<template>
  <div>
    <p>{{ greeting }} world!</p>
    <router-link to="/maa">go to maa</router-link>
    <router-link to="/bar">go to bar</router-link>
  </div>
</template>

<script>
  //    import Cat from './Cat.vue'
  
  const routes = [
    {path: '/foo', component: Foo},
    {path: '/bar', component: Bar}
  ]

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
