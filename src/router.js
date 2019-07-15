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
    {
      path: "/appoinsuccess",
      name: "appoinsuccess",
      component: () => import("./components/appoinSuccess.vue")
    },
    {
      path: "/auditdetails",
      name: "auditdetails",
      component: () => import("./views/auditDetails.vue")
    },
    {
      path: "/passdetails",
      name: "passdetails",
      component: () => import("./views/passDetails.vue")
    },
    {
      path: "/overdetails",
      name: "overdetails",
      component: () => import("./views/overDetails.vue")
    },
  ]
});
