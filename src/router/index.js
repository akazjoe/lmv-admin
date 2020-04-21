import Vue from 'vue'
import VueRouter from 'vue-router'

const INDEX  = () => import('@/views/Index')
const SYSTEM  = () => import('@/views/system/Index')
const NEWS  = () => import('@/views/news/Index')
const NEWSEDIT  = () => import('@/views/news/Edit')

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/Index'
  },
  {
    path: '/Index',
    component: INDEX
  },
  {
    path: '/system/Index',
    component: SYSTEM
  },
  {
    path: '/news/Index',
    component: NEWS
  },
  {
    path: '/news/Edit',
    component: NEWSEDIT
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
