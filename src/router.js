import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index.vue'
import Login from './components/Login.vue'
import admin from './components/Admin.vue'
import manage from './views/admin/manage.vue'
import log from './views/logs/log.vue'
import blog from './views/logs/businesslog.vue'
import apply from './views/system/apply.vue'
import warn from './views/system/warning.vue'
import show from './views/system/show.vue'
import collect from './views/logs/collect.vue'
import notFound from './views/notFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/admin',
      component: admin,
      children: [
        {
          path: '/',
          component: manage
        },
        {
          path: 'log',
          component: log
        },
        {
          path: 'blog',
          component: blog
        },
        {
          path: 'apply',
          component: apply
        },
        {
          path: 'warn',
          component: warn
        },
        {
          path: 'show',
          component: show
        },
        {
          path: 'collect',
          component: collect
        }
      ]
    },
    {
      path: '*',
      component: notFound
    }
    // {
    //   path: '*',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //   redirect: () =>
    //     import(/* webpackChunkName: "about" */ './views/notFound.vue')
    // }
  ]
})
