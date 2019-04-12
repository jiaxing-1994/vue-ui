// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import vueUI from '../../src/index'
import VueUI from '../../demo/index.js'
import '../../demo/index.css'
Vue.config.productionTip = false
Vue.use(VueUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
