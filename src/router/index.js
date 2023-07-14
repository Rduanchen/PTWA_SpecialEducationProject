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
              component: () => import('@/views/Math/Grade30/Unit1/MA3011.vue'),
              meta: { requiresAuth: true },
            },
            {
              path: 'MA3012',
              name: 'MA3012',
              component: () => import('@/views/Math/Grade30/Unit1/MA3012.vue'),
              meta: { requiresAuth: true },
            },
            {
              path: 'MA3013',
              name: 'MA3013',
              component: () => import('@/views/Math/Grade30/Unit1/MA3013.vue'),
              meta: { requiresAuth: true },
            },
            {
              path: 'MA3014',
              name: 'MA3014',
              component: () => import('@/views/Math/Grade30/Unit1/MA3014.vue'),
              meta: { requiresAuth: true },
            },
            {
              path: 'MA3015',
              name: 'MA3015',
              component: () => import('@/views/Math/Grade30/Unit1/MA3015.vue'),
              meta: { requiresAuth: true },
            },
            {
              path: 'MA3016',
              name: 'MA3016',
              component: () => import('@/views/Math/Grade30/Unit1/MA3016.vue'),
              meta: { requiresAuth: true },
            },
            {
              path: 'MA3017',
              name: 'MA3017',
              component: () => import('@/views/Math/Grade30/Unit1/MA3017.vue'),
              meta: { requiresAuth: true },
            },
            {
              path: 'MA3018',
              name: 'MA3018',
              component: () => import('@/views/Math/Grade30/Unit1/MA3018.vue'),
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
