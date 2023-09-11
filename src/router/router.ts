import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
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
