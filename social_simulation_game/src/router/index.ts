import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/back',
    name: 'Back',
    // route level code-splitting
    // this generates a separate chunk (back.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "back" */ '../views/Back.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
