import Vue from 'vue'
// 导入路由
import Router from 'vue-router'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

// 路由懒加载
const Home = ()=>import('../components/Home')
const About = ()=>import('../components/About')
const User = ()=>import('../components/User')

// 1. 通过Vue.use(插件),安装使用插件
Vue.use(Router)

// 创建路由对象
// 并将对象导出并在vue对象中挂载
const router =  new Router({
  routes: [
    // 配置路由和组件之间的映射关系
    {
      path:'/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/user/:userId',
      component: User
    }
  ],
  mode: "history",
  linkActiveClass: 'active'
})

export default router