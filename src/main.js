import Vue from 'vue'
import App from './App.vue'
require('../node_modules/bootstrap/dist/css/bootstrap.css')
require('../node_modules/bootstrap/dist/js/bootstrap.min.js')

Vue.config.productionTip = false
import router from './router/index';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
