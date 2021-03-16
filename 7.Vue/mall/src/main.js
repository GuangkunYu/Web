import Vue from 'vue';
import App from './App.vue';
import router from "@/router";

Vue.config.productionTip = false

new Vue({
  // 挂载路由实例，通过router配置参数注入路由，从而让整个应用都有路由功能
  router,
  render: h => h(App),
}).$mount('#app')
