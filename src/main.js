import Vue from 'vue';
import router from "./router";
import App from './App';
import { Overlay, Picker, Field, Popup, DatetimePicker, List, Tab, Tabs  } from 'vant';

Vue
  .use(List)
  .use(Tab)
  .use(Tabs)
  .use(Field)
  .use(Popup)
  .use(DatetimePicker)
  .use(Overlay)
  .use(Picker)

Vue.config.productionTip = false


new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
