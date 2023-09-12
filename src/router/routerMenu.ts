export const routerMenu = [
  {
    name: 'home',
    path: '/home',
    icon: 'House',
    meta: {
      title: '首页',
      requireAuth: true,
    },
    component: () => import('../views/home/home.vue'),
  },
]
