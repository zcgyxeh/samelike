<template>
<div>
<!--  头部-->
  <van-row type="flex" justify="space-around" class="header">
    <van-col span="3"><van-icon name="envelop-o" /></van-col>
    <van-col span="15">SameLike</van-col>
    <van-col span="2"><van-icon name="search"/></van-col>
    <van-col span="2"><van-icon name="goods-collect-o"/></van-col>
  </van-row>
  <!--  通知u-->
  <van-notice-bar
    left-icon="volume-o"
    text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
  />

<!--轮播图-->
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item  v-for="(image, index) in imgURL" :key="index">
      <img class="imgs" :src="image" alt="" />
    </van-swipe-item>
  </van-swipe>


<!--常用按钮-->
  <van-grid class="grid-item" >
    <van-grid-item icon="fire-o"  text="热品"   badge="1"/>
    <van-grid-item icon="cart-circle-o" text="购物车" />
    <van-grid-item icon="good-job-o" text="推荐" />
    <van-grid-item icon="manager-o" text="团" />
  </van-grid>

</div>
</template>

<script>

import Vue from 'vue';
import { Col, Row ,Swipe, SwipeItem ,Icon,Image as VanImage , Grid, GridItem,NoticeBar } from 'vant';

Vue.use(Icon);
Vue.use(VanImage);
Vue.use(Col);
Vue.use(Row);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(NoticeBar);

export default {
  name: "HomeTest",
  components:{
    Col,
    Row
  },
  data(){
    return{
      imgURL:[require('../../assets/img/home/1.png'),
              require('../../assets/img/home/2.png'),
              require('../../assets/img/home/3.png')]

    }
  }
}
</script>

<style scoped>
.header{
  background-color: darkblue;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  text-align: center;
  color: white;
}


.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  height: 180px;
  text-align: center;
  background-color: #39a9ed;
}
.imgs{
  width: 100%;
  height: 180px;

}
.van-grid-item{
  color: darkblue;
  background-color: sandybrown;
}
.grid-item{

}

</style>
