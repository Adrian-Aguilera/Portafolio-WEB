import { createRouter, createWebHistory } from 'vue-router'
import projectsView from '../views/projectsView.vue'
import perfilView from '../views/perfilView.vue'
import worksView from '../views/worksView.vue'

const routes = [
  {
    path: '/',
    name: 'profile',
    component: perfilView
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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
