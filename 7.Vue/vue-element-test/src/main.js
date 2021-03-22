import Vue from 'vue';
import App from './App.vue';
import router from './router';

// 完整引入element-ui
import ElementUI from 'element-ui';
import {Button, Select } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// 按需引入需要借助 babel-plugin-component  npm install babel-plugin-component -D
// 然后修改babel.config.js

Vue.use(ElementUI);
// Vue.use(Button)
// Vue.use(Select)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
