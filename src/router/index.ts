/**
 * router/index.ts
 *
 * Manual routes for ./src/pages/*.vue
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import contactView from '@/pages/contactView.vue'
import perfilView from '@/pages/perfilView.vue'
import projectsView from '@/pages/projectsView.vue'
import worksView from '@/pages/worksView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: perfilView,
    },
    {
      path: '/projects',
      name: 'proyectos',
      component: projectsView
    },
    {
      path: '/works',
      name: 'trabajos',
      component: worksView
    },
    {
      path: '/contact',
      name: 'contact',
      component: contactView
    },
  ],
})

export default router
