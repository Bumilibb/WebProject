import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

const route = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/index.vue'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../pages/signup.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

router.beforeEach(async (to, from, next) => {
  if(to.matched.some(record => record.meta.requireAuth)) {
    // Authentication check
    const token = localStorage.getItem('token')

    if(token) {
      // check if token is valid 
      return next()
    }

    return next('/login')
  } 

  next()
})

export default router