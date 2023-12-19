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
        {
          path: 'routerNavigation',
          component: ()=> import('@/views/RouterNavigation.vue')
        },
        {
          path: 'routerNavigation/:testparams',
          component: ()=> import('@/views/RouterNavigation.vue')
        },
        {
          path: 'dynamicRouter/:id',
          component: ()=> import('@/views/DynamicRouter.vue')
        },
        {
          path: 'dynamicRouterByProps/:id',
          component: ()=> import('@/views/DynamicRouterByProps.vue'),
          props: (route) => {
            console.log('route:',route);
            return {
              id: route.params.id
            }
          }
        },
        {
          path: 'namedview',
          name:'namedview',
          component: ()=>import('@/views/NamedView.vue'),
          children:[
            {
              path:'c2a',
              components:{
                left: ()=>import('@/components/ComponentC.vue'),
                right: ()=>import('@/components/ComponentA.vue')
              }
            },
            {
              path:'a2b',
              components:{
                left: ()=>import('@/components/ComponentA.vue'),
                right: ()=>import('@/components/ComponentB.vue')
              }
            }
          ]
        }
      ]
    },
    {
      path:'/newPage/:pathMatch(.*)*',
      redirect:{
        name:'about'
      }
    },
    {
      path:'/:pathMatch(.*)*',
      component: ()=> import('@/views/NotFound.vue')
    },
  ]
})

export default router
