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
    // 數學主頁面、顯示十二個上下年級
    {
      path: '/math',
      name: 'Math',
      meta: { requiresAuth: false }, 
      component: () => import('@/views/Math/index.vue'),
      children: [
        {
          // 三年級上學期主頁面、顯示十個單元
          path: 'grade30',
          name: 'MA30',
          component: () => import('@/views/Math/grade3/index.vue'),
          meta: { requiresAuth: true },
          children: [
            {
              // 第一單元主頁面、顯示十個單元裡的遊戲
              path: 'unit1',
              name: 'MA301',
              component: () => import('@/views/Math/grade3/unit1/index.vue'),
              children: [
                {
                  path: "game_view/:id",
                  components: {
                    MA3011: () => import('@/views/Math/Grade30/Unit1/MA3011.vue'),
                    MA3012: () => import('@/views/Math/Grade30/Unit1/MA3012.vue'),
                    MA3013: () => import('@/views/Math/Grade30/Unit1/MA3013.vue'),
                    MA3014: () => import('@/views/Math/Grade30/Unit1/MA3014.vue'),
                    MA3015: () => import('@/views/Math/Grade30/Unit1/MA3015.vue'),
                    MA3016: () => import('@/views/Math/Grade30/Unit1/MA3016.vue'),
                    MA3017: () => import('@/views/Math/Grade30/Unit1/MA3017.vue'),
                  }    
                }
              ]
            }
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
