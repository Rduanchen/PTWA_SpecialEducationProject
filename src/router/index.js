import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      meta: { requiresAuth: false },
      component: () => import("@/views/index.vue"),
    },
    //將遊戲選擇整合至一個頁面
    {
      path: "/GameSelect",
      name: "GameSelect",
      meta: { requiresAuth: false },
      component: () => import("@/views/GameSelect.vue"),
    },
    
    // {
    //   path: '/chinese',
    //   name: 'Chinese',
    //   meta: { requiresAuth: false },
    //   component: () => import('@/views/Chinese')
    // },
    // 數學主頁面、顯示十二個上下年級
    {
      path: "/math",
      name: "Math",
      meta: { requiresAuth: false },
      component: () => import("@/views/Math/index.vue"),
      children: [
        {
          // 三年級上學期主頁面、顯示十個單元
          path: "grade30",
          name: "MA30",
          component: () => import("@/views/Math/DisplayGrade.vue"),
          props: { currentGrade: "MA30" },
          meta: { requiresAuth: true },
          children: [
            {
              // 第一單元主頁面、顯示十個單元裡的遊戲
              path: "unit1",
              component: () => import("@/views/Math/DisplayUnit.vue"),
              props: { currentUnit: "MA301" },
              children: [
                {
                  path: "",
                  name: "MA301",
                  components: {
                    MA3011: () =>
                      import("@/views/Math/Grade30/Unit1/MA3011.vue"),
                    MA3012: () =>
                      import("@/views/Math/Grade30/Unit1/MA3012.vue"),
                    MA3013: () =>
                      import("@/views/Math/Grade30/Unit1/MA3013.vue"),
                    MA3014: () =>
                      import("@/views/Math/Grade30/Unit1/MA3014.vue"),
                    MA3015: () =>
                      import("@/views/Math/Grade30/Unit1/MA3015.vue"),
                    MA3016: () =>
                      import("@/views/Math/Grade30/Unit1/MA3016.vue"),
                    MA3017: () =>
                      import("@/views/Math/Grade30/Unit1/MA3017.vue"),
                    MA3018: () =>
                      import("@/views/Math/Grade30/Unit1/MA3018.vue"),
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.warn(`route: ${from.path} -> ${to.path}`);
  next();
});

export default router;
