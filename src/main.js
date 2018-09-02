import Vue from 'vue';
import ViUi from 'vue-vi-ui';
import 'vue-vi-ui/dist/vi-ui.min.css';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(ViUi);

new Vue({
  render: h => h(App),
}).$mount('#app');
