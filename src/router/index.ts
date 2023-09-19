import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: "/home",
    component: HomeView,
    children: [
      {
        path: '/goods',
        name: 'goods',
        component: () => import('../views/goods.vue')
      },
      {
        path: '/vip',
        name: 'vip',
        component: () => import('../views/vip.vue')

      }
      ,
      {
        path: '/set',
        name: 'set',
        component: () => import('../views/set.vue')
      }, {
        path: '/shops',
        name: 'shops',
        component: () => import('../views/shops.vue')
      }, {
        path: '/home',
        name: 'home',
        redirect: "/backstage",
        component: () => import('../views/home.vue'),
        children: [
          {
            path: '/backstage',
            name: 'backstage',
            component: () => import('../views/backstage.vue')
          },
          {
            path: '/photo',
            name: 'photo',
            component: () => import('../views/photo.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  var token = localStorage.getItem('token')
  if (token && to.path == "/login") {
    next("/")
  } else if (!token && to.path != "/login") {
    next("/login")
  } else {
    next()
  }
})

export default router
