import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/home'
import About from '@/page/about/about'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: '/cnycard2018/',
  routes: [
    {
      path: '/:lang',
      name:'home',
      component: Home,
    },
    {
      path: '/:lang/about',
      name:'about',
      component: About
    },
    {
      path: '*',
      redirect: "/en"
    },
  ]
})



