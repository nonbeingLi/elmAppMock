import Vue from 'vue'
import Router from 'vue-router'
import lytest from '@/lytest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'lytest',
      component: lytest
    }
  ]
})
