import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import utils from './assets/utils.js'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/normalize.css'

Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(utils)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ElementUI,
  template: '<App/>',
  components: { App }
})
