import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMeta from 'vue-meta';
import './assets/CSS/Styles.scss'

Vue.use(VueMeta);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
