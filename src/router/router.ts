import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import {routerMenu} from './routerMenu'
const routes: Array<RouteRecordRaw> = [
  {
    name: 'layout',
    path: '/',
    redirect: '/home',
    meta: {
      title: '你快乐不',
      requireAuth: false,
    },
    component: () => import('../layout/layout.vue'),
    children: [...routerMenu],
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('../views/login/login.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
