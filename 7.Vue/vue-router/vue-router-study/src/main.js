import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// 直接修改location.hash可以直接修改href并不发生页面刷新
// 栈结构--->
// 或者通过HTML5的history.pushState({}, '', 'home')
// 或者通过HTML5的history.replaceState({}, '', 'home')
// 或者通过HTML5的history.back() 后退
// 或者通过HTML5的history.go(-1) 后退
// 或者通过HTML5的history.forword(1) 前进
