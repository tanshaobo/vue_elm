import Vue from 'vue'
import App from './App'
import router from './router'
import api from './api/index.js'

Vue.prototype.$api = api
Vue.config.productionTip = false

//require('./mock.js')
 new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
