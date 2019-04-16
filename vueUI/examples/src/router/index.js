import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Header from '@/components/Header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/header',
      name:'Header',
      component:Header
    }
  ]
})
