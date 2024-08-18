import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/profile',
      name: 'profile',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/illustration',
      name: 'illustration',
      component: () => import('../views/illustration/index.vue')
    },
    {
      path: '/illustration/detail',
      name: 'illustration_detail',
      component: () => import('../views/illustration/detail.vue')
    },
    {
      path: '/design',
      name: 'design',
      component: () => import('../views/design/index.vue')
    },
    {
      path: '/design/detail',
      name: 'design_detail',
      component: () => import('../views/design/detail.vue')
    },
    {
      path: '/frontend',
      name: 'frontend',
      component: () => import('../views/FrontendView.vue')
    }
  ]
})

export default router
