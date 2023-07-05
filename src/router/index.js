import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: { requiresAuth: false }, 
      component: () => import('@/views/index.vue')
    },
    // {
    //   path: '/chinese',
    //   name: 'Chinese',
    //   meta: { requiresAuth: false }, 
    //   component: () => import('@/views/Chinese')
    // },
    {
      path: '/math',
      name: 'Math',
      meta: { requiresAuth: false }, 
      component: () => import('@/views/Math.vue'),
      children: [
        {
          path: 'grade3/games',
          name: 'Grade3Games',
          component: () => import('@/views/Games.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'grade3/game_view',
          name: 'Grade3GameView',
          component: () => import('@/views/GameView.vue'),
          meta: { requiresAuth: true },
          children: [
            {
              path: 'MA3011',
              name: 'MA3011',
              component: () => import('@/views/Math/Grade30/MA3011/index.vue'),
              meta: { requiresAuth: true },
            },
            {
              path: 'MA3012',
              name: 'MA3012',
              component: () => import('@/views/Math/Grade30/MA3012.vue'),
              meta: { requiresAuth: true },
            },
          ]
        },
      ],
    },
    // {
    //   path: '/technology',
    //   name: 'Technology',
    //   meta: { requiresAuth: false }, 
    //   component: () => import('@/views/Technology')
    // },
  ]
})

router.beforeEach((to, from, next) => {
  console.warn(`route: ${from.path} -> ${to.path}`);
  next();
});

export default router
