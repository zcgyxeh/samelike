<template>
<div>
<!--  头部信息-->
  <layout></layout>

<!--  用户信息-->
  <UserInf></UserInf>
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
</template>

<script>
import Layout from "./vant/Layout";
import UserInf from "./vant/UserInf";
import UserBottomOne from "./vant/UserBottomOne";
import UserBottomTow from "./vant/UserBottomTow";
import Call from "./vant/Call";

export default {
  name: "profile",
  components:{
    Layout,
    UserInf,
    UserBottomOne,
    UserBottomTow,
    Call
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
