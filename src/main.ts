import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './assets/css/main.css'
import 'reflect-metadata';

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
