import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/pages/index.vue'
import DefaultView from '@/layouts/Default.vue'
import AthletesAndStaffView from '@/views/survey/atheletes-and-staff/pages/index.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultView,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/survey/athletes-and-staff',
          name: 'athletes-and-staff',
          component: AthletesAndStaffView
        }
      ]
    }
  ]
})

export default router
