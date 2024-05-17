import { createRouter, createWebHistory } from 'vue-router'
import Exam1View from '../views/Exam1View.vue'
import Exam2View from '../views/Exam2View.vue'
import Exam3View from '../views/Exam3View.vue'

const routes = [
  {
    path: '/exam1',
    name: 'Exam1View',
    component: Exam1View
  },
  {
    path: '/exam2',
    name: 'Exam2View',
    component: Exam2View
  },
  {
    path: '/exam3',
    name: 'Exam3View',
    component: Exam3View
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

