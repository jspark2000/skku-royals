import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/index.vue'
import DefaultView from '@/layouts/Default.vue'
import AthletesAndStaffView from '@/views/Submit.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DefaultView,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/athletes-and-staff/survey/:id',
          name: 'athletes-and-staff',
          component: AthletesAndStaffView
        }
      ]
    }
  ]
})

export default router
