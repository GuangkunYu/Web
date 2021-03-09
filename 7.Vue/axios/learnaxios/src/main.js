import Vue from 'vue'
import App from './App'
import axios from "axios";
import {request} from './network/request'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})

// http://123.207.32.32:8000/home/multidata
// 获取远端图片
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'get'
// }).then(res => {
//   console.log(res);
// });

request({
  url: '/home/multidata'
}).then(res=>{
  console.log(res);
}).catch(err=>{
  console.log(err);
})
