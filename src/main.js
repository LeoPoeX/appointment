import Vue from 'vue';
import router from "./router";
import App from './App.vue';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import infiniteScroll from 'vue-infinite-scroll';

Vue.use(infiniteScroll)
Vue.use(MintUI)

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
