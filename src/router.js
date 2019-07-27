import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: "/home",
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
    component: () => import("./components/appointSuccess.vue"),
    meta: { title: '预约成功' }
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: () => import("./views/auditDetail.vue"),
    meta: { title: '审核详情' },
  }
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes
});

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export default router;
