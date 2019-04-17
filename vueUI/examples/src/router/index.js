import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Header from '@/components/Header'
import Layer from '@/components/Layer'
import Loading from '@/components/Loading'
import Tabs from '@/components/Tabs'

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
    },
    {
      path:'/layer',
      name:'Layer',
      component:Layer
    },
    {
      path:'/loading',
      name:'Loading',
      component:Loading
    },
    {
      path:'/tabs',
      name:'Tabs',
      component:Tabs
    }
  ]
})
