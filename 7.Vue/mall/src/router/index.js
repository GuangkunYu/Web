// 1. 导入vue和vue-router
import Vue from 'vue';
import VueRouter from "vue-router";


// 2. 安装路由VueRouter
Vue.use(VueRouter);

// 3.1 定义路由组件（从其他文件import进来）
const Home = () => import('@/views/home/Home');
const Category = () => import('@/views/category/Category');
const Cart = () => import('@/views/cart/Cart');
const Profile = () => import('@/views/profile/Profile');

// 3.2 定义路由，每个路由映射一个组件
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
]

// 3. 创建路由实例，传入路由规则
const router = new VueRouter({
  routes,
  // url展示规则
  mode: 'history'
})

// 4. 导出路由
export default router
