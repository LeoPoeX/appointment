import Vue from 'vue';
import router from "./router";
import App from './App';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import { List, Sticky, Tab, Tabs  } from 'vant';

Vue.use(List);
Vue.use(Sticky);
Vue.use(Tab).use(Tabs);
Vue.use(MintUI)

Vue.config.productionTip = false


new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
