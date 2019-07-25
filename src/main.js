import Vue from 'vue'
import router from "./router";
import App from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { DatetimePicker } from 'vant';
import 'vant/lib/index.css';

Vue.use(DatetimePicker);
Vue.use(MintUI)

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
