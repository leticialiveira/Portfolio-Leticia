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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/mentorship',
      name: 'mentorship',
      component: () => import('../views/MentorshipView.vue')
    },
    {
      path: '/code',
      name: 'code', 
      component : () => import('../views/CodeSnippetView.vue')
    },
    {
      path: '/projects',
      name: 'projects', 
      component : () => import('../views/ProjectView.vue')
    },
    {
      path: '/docs',
      name: 'documents', 
      component : () => import('../views/DocsView.vue')
    }
  ]
})

export default router
