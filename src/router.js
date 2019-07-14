import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/myReservation.vue")
    },
    {
      path: "/appointment",
      name: "appointment",
      component: () => import("./views/appointment.vue")
    },
    {
      path: "/pass",
      name: "pass",
      component: () => import("./components/Pass.vue")
    },
  ]
});
