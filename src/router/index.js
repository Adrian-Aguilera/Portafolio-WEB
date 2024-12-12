import { createRouter, createWebHistory } from 'vue-router'
import projectsView from '../views/projectsView.vue'
import perfilView from '../views/perfilView.vue'

const routes = [
  {
    path: '/',
    name: 'perfil',
    component: perfilView
  },
  {
    path: '/proyectos',
    name: 'proyectos',
    component: projectsView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
