import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import utils from './assets/utils.js'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/normalize.css'

Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(utils)

Vue.prototype.$ajax = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ElementUI,
  template: '<App/>',
  components: { App }
})
