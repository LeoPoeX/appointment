import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/myReservation.vue"),
      meta: { title: '我的预约' }
    },
    {
      path: "/appointment",
      name: "appointment",
      component: () => import("./views/appointment.vue"),
      meta: { title: '我要预约' }
    },
    {
      path: "/pass",
      name: "pass",
      component: () => import("./components/pass.vue"),
      meta: { title: '通行证' }
    },
    {
      path: "/appointSuccess",
      name: "appointSuccess",
      component: () => import("./components/appoinSuccess.vue"),
      meta: { title: '预约成功' }
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: () => import("./views/auditDetails.vue"),
      meta: { title: '审核详情' },
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {// 如果设置标题，拦截后设置标题
    document.title = to.meta.title
  }
  next()
})

export default router;
