import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import { component } from 'vue/types/umd'

Vue.use(VueRouter)

const routes = [

  {
    path:'/user',
    name:'user',
    component:()=>import('../views/element/UserView.vue')
  },
  {
    path:'/question',
    name:'question',
    component:()=>import('../views/element/QuestionView.vue')
  },
  {
    path:'/',
    redirect: '/user'
  }
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
