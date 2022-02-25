import Vue from 'vue'
import VueRouter from 'vue-router'

const HomeTest = () => import('views/home/HomeTest')
//弹出页面
const Popup = () => import('views/home/child/Popup')
//分类页面
const Category = () => import('views/category/Category')
//购物车页面
const Cart = () => import('views/cart/Cart')
// 我的页面的懒加载  Profile页面
const Profile = () => import('views/profile/Profile')
const MyFootprint = () => import('views/profile/childern/MyFootprint')
const MyEvaluation = () => import('views/profile/childern/MyEvaluation')
const MyCollection = () => import('views/profile/childern/MyCollection')
const Obligation = () => import('views/profile/childern/Obligation')
const AddressManagement = () => import('views/profile/childern/AddressManagement')
const MissionCenter = () => import('views/profile/childern/MissionCenter')
const CheckInDaily = () => import('views/profile/childern/CheckInDaily')
const ServiceCenter = () => import('views/profile/childern/ServiceCenter')
const SystemSetup = () => import('views/profile/childern/SystemSetup')
const MyOrder = () => import('views/profile/childern/MyOrder')


// 团页面
const Tuan = () => import('views/tuan/Tuan')
const SearchGroup = () => import('views/tuan/subpage/SearchGroup')//搜索团
const GroupInformation = () => import('views/tuan/subpage/GroupInformation') //团信息
const FriendNews = () => import('views/tuan/subpage/FriendNews') //团信息
const NewsPage = () => import('views/tuan/subpage/NewsPage') //团信息


// 登录页面
const logIn = () => import('views/user/logIn')
const Register = () => import('views/user/Register')

//产品页面
// const goodsone = () => import('views/product/GoodsProduct01') //详情页
const Product = () => import('views/product/Product')
const GoodsProduct01 = () => import('views/product/GoodsProduct01')
const GoodsProduct02 = () => import('views/product/GoodsProduct02')
const GoodsProduct03 = () => import('views/product/GoodsProduct03')
const GoodsProduct04 = () => import('views/product/GoodsProduct04')
const GoodsProduct05 = () => import('views/product/GoodsProduct05')
const Goods01 = () => import('views/product/Goods01')
const Goods02 = () => import('views/product/Goods02')
const Goods03 = () => import('views/product/Goods03')
const Goods04 = () => import('views/product/Goods01')
const Goods05 = () => import('views/product/Goods01')


// 1.安装插件
Vue.use(VueRouter)


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}


// 2.创建router
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home', //主页
    component: HomeTest,
    meta: {
      numb: 0
    },
    children: [ //home下的子路由设置
      {
        path: 'popup',
        component: Popup
      },
    ],
  },
  {
    path: '/category',
    component: Category,
    meta: {
      numb: 1
    },
    children: [
      {
        path: 'Goods01',
        component: Goods01,
        children: [
          {
            path: 'GoodsProduct01',
            component: GoodsProduct01
          },
          {
            path: 'GoodsProduct02',
            component: GoodsProduct02
          },
          {
            path: 'GoodsProduct03',
            component: GoodsProduct03
          },
          {
            path: 'GoodsProduct04',
            component: GoodsProduct04
          },
          {
            path: 'GoodsProduct05',
            component: GoodsProduct05
          }

        ]
      }
    ]
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      numb: 2
    },
  },
  {
    path: '/tuan',
    component: Tuan,
    meta: {
      numb: 3
    },
    children: [
      {
        path: 'FriendNews',  //好友信息
        component: FriendNews
      },
      {
        path: 'SearchGroup', //搜索团
        component: SearchGroup
      },
      {
        path: 'GroupInformation', //团信息
        component: GroupInformation
      },
      {
        path: 'NewsPage', //页面信息
        component: NewsPage
      },

    ]
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      numb: 4
    },
    children: [
      {
        path: 'MyOrder',
        component: MyOrder,
      },
      {
        path: 'MyCollection',
        component: MyCollection,
      },
      {
        path: 'Obligation',
        component: Obligation,
      },
      {
        path: 'MyFootprint',
        component: MyFootprint,
      },
      {
        path: 'MyEvaluation',
        component: MyEvaluation,
      },
      {
        path: 'AddressManagement',
        component: AddressManagement,
      },
      {
        path: 'MissionCenter',
        component: MissionCenter,
      },
      {
        path: 'CheckInDaily',
        component: CheckInDaily,
      },
      {
        path: 'ServiceCenter',
        component: ServiceCenter,
      },
      {
        path: 'SystemSetup',
        component: SystemSetup,
      },
      {
        path: 'logIn',
        component: logIn,
      },
      {
        path: 'Register',
        component: Register,
      }
    ]
  },
  {
    path: 'Product',
    component: Product,
    children: []
  }
]


const router = new VueRouter({
  routes,
  mode: 'history'
})

// 路由守卫
// router.beforeEach((to, from, next)=>{
//   let token = localStorage.getItem('token')
//     // to是去往的路径
//   // from从那个路径来的
//     if (to.path == '/cart'){
//       if (token){
//         next();
//       }else {
//         Vue.prototype.$toast('请先登录');
//         setTimeout(()=>{
//           next('/profile');
//         },1000)
//       }
//       return
//     }
//     next();
// })

export default router
