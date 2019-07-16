import Vue from 'vue'
import router from "./router";
import App from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import VModal from 'vue-js-modal'

Vue.use(VModal, {
  dialog: true,
  dynamic: true
})

Vue.use(iView);
Vue.use(MintUI)

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
