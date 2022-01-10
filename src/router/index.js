import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeTest from "../views/home/HomeTest";

// const Home = () => import('../views/home/Home')
const HomeTest = () => import('../views/home/HomeTest')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Tuan = () => import('../views/tuan/Tuan')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: HomeTest
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
    path: '/tuan',
    component: Tuan
  },
  {
    path: '/profile',
    component: Profile
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})


export default router
