import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
  {path: '/404', component: () => import('@/views/404'), hidden: true},
  {path: '', component: () => import('@/views/index'), hidden: true},
  {path: '/cas', component: () => import('@/views/cas/cas'), hidden: true},
  {path: '/cas-login', component: () => import('@/views/cas/login'), hidden: true},
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})