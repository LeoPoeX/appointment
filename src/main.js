import Vue from 'vue';
import router from "./router";
import App from './App';
import { NumberKeyboard, Loading, Picker, Field, Popup, DatetimePicker, List, Tab, Tabs, PullRefresh } from 'vant';

Vue
  .use(List)
  .use(PullRefresh)
  .use(Tab)
  .use(Tabs)
  .use(Field)
  .use(Popup)
  .use(DatetimePicker)
  .use(Picker)
  .use(Loading)
  .use(NumberKeyboard)

Vue.config.productionTip = false


new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
