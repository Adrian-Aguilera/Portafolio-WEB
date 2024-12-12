import { createRouter, createWebHistory } from 'vue-router'
import boxMainView from '../views/boxMainView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: boxMainView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
