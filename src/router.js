import Vue from 'vue';
import Router from 'vue-router';
import { Toast } from 'vant';
import axios from 'axios';
import utils from './utils';

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: '/list'
  },
  {
    path: "/list",
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
    path: "/permit",
    name: "permit",
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
  // 第一次进入项目
  let token = window.localStorage.getItem('user-token');

  function toNextPage() {
    const title = to.meta && to.meta.title;
    if (title) {
      document.title = title;
    }
    next();
  }
  if (token) {
    toNextPage();
  } else if (utils.getQueryString('code')) {
    let code = utils.getQueryString('code');
    const toast = Toast.loading({
      duration: 0,       // 持续展示 toast
      forbidClick: true, // 禁用背景点击
      loadingType: 'spinner',
      message: '正在授权...'
    });
    axios({
      method:'post',
      url: '/api/employee/auth',
      data: {
        code
      }
    }).then(({ data }) => {
      toast.clear();
      window.localStorage.setItem('user-token', data.token);
      const title = to.meta && to.meta.title;
      if (title) {
        document.title = title;
      }
      next('/list');
    }).catch(() => {
      toast.clear();
      Toast.error('授权失败');
    })
  } else {
    window.location.href =
      "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
      'ww3d81bd40f0803db5' +
      "&redirect_uri=" +
      encodeURIComponent('http://visitor-frontend.fookwood.com') +
      "&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect";
    return false;
  }
});

export default router;
