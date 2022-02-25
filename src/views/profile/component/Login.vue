<template>
<div @click="$router.push('/profile/logIn')">
  <van-row class="van-row" >
    <van-col class="van-col1" span="8">
      <img :src="avatar" alt="">
    </van-col>
    <van-col class="van-col2" span="8">{{ nameLable }}</van-col>
    <van-col class="van-col3" span="8"><van-icon name="arrow" /></van-col>
  </van-row>
</div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      avatar:require('assets/img/login/3.png'),
      nameLable:'请点击登录'
    }
  }
}
</script>

<style scoped>
.van-row{
  height: 100px;
  padding: 2% 4%;
  background-color: darkblue;
  color: white;
  /*display: block;*/


}

.van-col1 img{
  width: 50%;
  height: 100%;
  margin: 10px;
}
.van-col2,.van-col3{
  line-height: 75px;
}
.van-col3{
  text-align: right;
}
</style>
