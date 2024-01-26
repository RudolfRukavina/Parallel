import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/onama',
      name: 'onama',
      component: () => import('../views/AboutView.vue')
    },
        {
      path: '/pripreme',
      name: 'pripreme',
      component: () => import('../views/PripremeView.vue')
    },
    {
      path: '/instrukcije',
      name: 'instrukcije',
      component: () => import('../views/InstrukcijeView.vue')
    },

  ]
})

export default router
