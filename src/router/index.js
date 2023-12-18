import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/newpage',
      name: '新增頁面',
      component: () => import('../views/NewPage.vue'),
      children: [
        {
          path: 'a',
          name: '新增頁面內的元件A',
          component: ()=> import('../components/ComponentA.vue')
        },
        {
          path: 'b',
          name: '新增頁面內的元件B',
          component: ()=> import('../components/ComponentB.vue')
        },
      ]
    }
  ]
})

export default router
