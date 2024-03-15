import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { useStore } from '@/viewModel/store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

//doenst work yet
router.beforeEach((to, from, next) => {
  const { getCurrentUser } = useStore()
  const currentUser = getCurrentUser()
  if (!['/login', '/register'].includes(to.path) && !currentUser) {
    next('/login')
  } else {
    next()
  }
})
export default router
