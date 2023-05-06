// Composables
import { useAuthStore } from '@/common/store/auth'
import { createRouter, createWebHistory } from 'vue-router'
import DefaultView from '@/layouts/default/Default.vue'
import LandingView from '@/views/index.vue'
import LoginView from '@/views/login.vue'
import CallbackView from '@/views/auth/index.vue'
import Swal from 'sweetalert2'

const routes = [
  {
    path: '/',
    component: DefaultView,
    children: [
      {
        path: '/',
        name: 'landingPage',
        component: LandingView,
        meta: {
          roles: ['Public', 'Newbie', 'Normal', 'Admin', 'SuperAdmin']
        }
      },
      {
        path: '/login',
        name: 'loginPage',
        component: LoginView,
        meta: {
          roles: ['Public', 'Newbie', 'Normal', 'Admin', 'SuperAdmin']
        }
      },
      {
        path: '/login/callback',
        name: 'callbackPage',
        component: CallbackView,
        meta: {
          roles: ['Public', 'Newbie', 'Normal', 'Admin', 'SuperAdmin']
        }
      },
      {
        path: '/recruiting',
        name: 'recruitingPage',
        component: () => import('@/views/recruiting/index.vue'),
        meta: {
          roles: ['Public', 'Newbie', 'Normal', 'Admin', 'SuperAdmin']
        }
      },
      {
        path: '/recruiting/fbti',
        name: 'FBTIPage',
        component: () => import('@/views/recruiting/fbti/index.vue'),
        meta: {
          roles: ['Public', 'Newbie', 'Normal', 'Admin', 'SuperAdmin']
        }
      }
    ]
  },
  {
    path: '/home',
    component: () => import('@/layouts/console/Default.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          roles: ['Newbie', 'Normal', 'Admin', 'SuperAdmin']
        }
      }
    ]
  },
  {
    path: '/people',
    component: () => import('@/layouts/console/Default.vue'),
    children: [
      {
        path: 'list',
        name: 'people-list',
        component: () => import('@/views/people/list/index.vue'),
        meta: {
          roles: ['Newbie', 'Normal', 'Admin', 'SuperAdmin']
        }
      },
      {
        path: 'register',
        name: 'people-register',
        component: () => import('@/views/people/register/index.vue'),
        meta: {
          roles: ['Admin', 'SuperAdmin']
        }
      },
      {
        path: 'delete',
        name: 'people-delete',
        component: () => import('@/views/people/delete/index.vue'),
        meta: {
          roles: ['Admin', 'SuperAdmin']
        }
      },
      {
        path: 'update',
        name: 'people-update',
        component: () => import('@/views/people/update/index.vue'),
        meta: {
          roles: ['Admin', 'SuperAdmin']
        }
      },
      {
        path: 'injury/list',
        name: 'injury-list',
        component: () => import('@/views/people/injury/list/index.vue'),
        meta: {
          roles: ['Newbie', 'Normal', 'Admin', 'SuperAdmin']
        }
      },
      {
        path: 'injury/register',
        name: 'injury-register',
        component: () => import('@/views/people/injury/register/index.vue'),
        meta: {
          roles: ['Admin', 'SuperAdmin']
        }
      },
      {
        path: 'injury/update',
        name: 'injury-update',
        component: () => import('@/views/people/injury/update/index.vue'),
        meta: {
          roles: ['Admin', 'SuperAdmin']
        }
      },
      {
        path: 'coaching-staff/list',
        name: 'coaching-staff-list',
        component: () => import('@/views/people/coaching-staff/list/index.vue'),
        meta: {
          roles: ['Newbie', 'Normal', 'Admin', 'SuperAdmin']
        }
      },
      {
        path: 'coaching-staff/register',
        name: 'coaching-staff-register',
        component: () =>
          import('@/views/people/coaching-staff/register/index.vue'),
        meta: {
          roles: ['Admin', 'SuperAdmin']
        }
      },
      {
        path: 'coaching-staff/update',
        name: 'coaching-staff-update',
        component: () =>
          import('@/views/people/coaching-staff/update/index.vue'),
        meta: {
          roles: ['Admin', 'SuperAdmin']
        }
      }
    ]
  },
  {
    path: '/attendance',
    component: () => import('@/layouts/console/Default.vue'),
    children: [
      {
        path: 'list',
        name: 'attendance-list',
        component: () => import('@/views/attendance/list/index.vue'),
        meta: {
          roles: ['Newbie', 'Normal', 'Admin', 'SuperAdmin']
        }
      },
      {
        path: 'list/:date',
        name: 'attendance-detail',
        component: () => import('@/views/attendance/list/[date]/index.vue'),
        meta: {
          roles: ['Newbie', 'Normal', 'Admin', 'SuperAdmin']
        }
      },
      {
        path: 'check',
        name: 'attendance-check',
        component: () => import('@/views/attendance/check/index.vue'),
        meta: {
          roles: ['Normal', 'Admin', 'SuperAdmin']
        }
      },
      {
        path: 'update',
        name: 'attendance-update',
        component: () => import('@/views/attendance/update/index.vue'),
        meta: {
          roles: ['Admin', 'SuperAdmin']
        }
      },
      {
        path: 'delete',
        name: 'attendance-delete',
        component: () => import('@/views/attendance/delete/index.vue'),
        meta: {
          roles: ['Admin', 'SuperAdmin']
        }
      }
    ]
  },
  {
    path: '/survey',
    component: () => import('@/layouts/console/Default.vue'),
    children: [
      {
        path: 'register',
        name: 'survey-register',
        component: () => import('@/views/survey/register/index.vue'),
        meta: {
          roles: ['Admin', 'SuperAdmin']
        }
      },
      {
        path: 'not-submitted',
        name: 'survey-not-submitted',
        component: () => import('@/views/survey/not-submitted/index.vue'),
        meta: {
          roles: ['Admin', 'SuperAdmin']
        }
      },
      {
        path: 'register/separate',
        name: 'survey-register-separate',
        component: () => import('@/views/survey/register-separate/index.vue'),
        meta: {
          roles: ['Admin', 'SuperAdmin']
        }
      },
      {
        path: 'delete',
        name: 'delete',
        component: () => import('@/views/survey/delete/index.vue'),
        meta: {
          roles: ['Admin', 'SuperAdmin']
        }
      }
    ]
  },
  {
    path: '/game',
    component: () => import('@/layouts/console/Default.vue'),
    children: [
      {
        path: 'list',
        name: 'game-list',
        component: () => import('@/views/game/list/index.vue'),
        meta: {
          roles: ['Newbie', 'Normal', 'Admin', 'SuperAdmin']
        }
      },
      {
        path: 'list/:id',
        name: 'game-detail',
        component: () => import('@/views/game/list/[id]/index.vue'),
        meta: {
          roles: ['Newbie', 'Normal', 'Admin', 'SuperAdmin']
        }
      },
      {
        path: 'register',
        name: 'game-register',
        component: () => import('@/views/game/register/index.vue'),
        meta: {
          roles: ['Admin', 'SuperAdmin']
        }
      },
      {
        path: 'delete',
        name: 'game-delete',
        component: () => import('@/views/game/delete/index.vue'),
        meta: {
          roles: ['Admin', 'SuperAdmin']
        }
      }
    ]
  },
  {
    path: '/role',
    component: () => import('@/layouts/console/Default.vue'),
    children: [
      {
        path: 'update',
        name: 'role-update',
        component: () => import('@/views/role/index.vue'),
        meta: {
          roles: ['Admin', 'SuperAdmin']
        }
      }
    ]
  },
  {
    path: '/chat-gpt',
    component: () => import('@/layouts/console/Default.vue'),
    children: [
      {
        path: 'main',
        name: 'chat-gpt',
        component: () => import('@/views/chatgpt/index.vue'),
        meta: {
          roles: ['Newbie', 'Normal', 'Admin', 'SuperAdmin']
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  const roleStatus = await useAuthStore().getRole()
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (to.meta.roles && !to.meta.roles.includes(roleStatus)) {
    if (!useAuthStore().isLoggedIn) {
      Swal.fire({
        title: 'ERROR',
        text: '로그인 정보가 만료되었습니다.',
        icon: 'error'
      })
      next('/')
    } else {
      Swal.fire({
        title: 'FORBIDDEN',
        text: '접근 권한이 없습니다.',
        icon: 'warning'
      })
      next(from)
    }
  } else {
    next()
  }
})

export default router
