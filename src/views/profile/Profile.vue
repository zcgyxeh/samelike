<template>
<div>
<div v-if="$route.path == '/profile'">
  <!--  头部信息-->
  <layout></layout>

  <!--  用户信息-->

  <login></login>
  <!--  用户下面第一个块区域-->
  <UserBottomOne></UserBottomOne>
  <!--  隔断1-->
  <div class="partition"></div>
  <!--  用户下面的第二个区域-->
  <user-bottom-tow></user-bottom-tow>
  <!--  隔断2-->
  <div class="partition1"></div>
  <Call></Call>
</div>

  <transition name="van-slide-right"  v-for="(item, index) in path" :key="index">
    <router-view  :v-if="$route.path == item.pathName"></router-view>
  </transition>


</div>

</template>

<script>
import Layout from "./vant/Layout";
import UserInf from "./vant/UserInf";
import UserBottomOne from "./vant/UserBottomOne";
import UserBottomTow from "./vant/UserBottomTow";
import Call from "./vant/Call";
import Login from "./component/Login";

// console.log(path)

export default {
  name: "profile",
  components:{
    Layout,
    UserInf,
    UserBottomOne,
    UserBottomTow,
    Call,
    Login
  },
  data(){
    return {
      path:[{
        pathName:'/profile/MyOrder'
      },
        {
        pathName:'/profile/MyCollection'
      },
        {
          pathName:'/profile/Obligation'
        },
        {
          pathName:'/profile/MyEvaluation'
        },
        {
          pathName:'/profile/AddressManagement'
        },
        {
          pathName:'/profile/MissionCenter'
        },
        {
          pathName:'/profile/CheckInDaily'
        },
        {
          pathName:'/profile/ServiceCenter'
        },
        {
          pathName:'/profile/SystemSetup'
        },]
    }
  }
}
</script>

<style scoped>
.partition{
  height: 10px;
  background-color: #f9f9f9;
}
.partition1{
  height: 20px;
  background-color: #f9f9f9;
}
</style>
