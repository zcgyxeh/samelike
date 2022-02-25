<template>
  <div class="box">

    <div v-if="$route.path=='/home'">
      <!--  头部-->
      <van-row type="flex" justify="space-around" class="header">
        <van-col span="3">
          <van-icon name="envelop-o"/>
        </van-col>
        <van-col span="15">SameLike</van-col>
        <van-col span="2">
          <van-icon name="search" @click="getPopup" to="/home/popup"/>
        </van-col>
        <van-col span="2">
          <van-icon name="goods-collect-o"/>
        </van-col>
      </van-row>
      <!--  通知u-->
      <van-notice-bar
        left-icon="volume-o"
        text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
      />

      <!--轮播图-->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(image, index) in imgURL" :key="index">
          <img class="imgs" :src="image" alt=""/>
        </van-swipe-item>
      </van-swipe>


      <!--常用按钮-->
      <van-grid class="grid-item">
        <van-grid-item icon="fire-o" text="热品" badge="0"/>
        <van-grid-item icon="cart-circle-o" text="购物车"/>
        <van-grid-item icon="good-job-o" text="推荐"/>
        <van-grid-item icon="manager-o" text="团"/>
      </van-grid>


      <!--    间隔-->
      <div class="space"></div>


      <!--    窗口信息-->

      <van-grid :column-num="5" class="windows_goods">
        <van-grid-item v-for="(item,index) in goods_img" :key="index" border="true">
          <img :src="item.imgURL" alt="">
          <div>{{ item.good_test }}</div>
        </van-grid-item>
      </van-grid>

      <!--    间隔-->

      <div class="space"></div>


      <!--    新品首发-->
      <div class="new_person">
        <new-person></new-person>

      </div>


      <!--    间隔-->
      <div class="space"></div>

      <sell-well></sell-well>

      <!--    间隔-->
      <div class="space"></div>

      <BottomMessage></BottomMessage>

    </div>


    <!--  弹出框-->
    <transition name="van-slide-right">
      <router-view v-if="$route.path == '/home/popup'"></router-view>
    </transition>

  </div>
</template>

<script>

import {getHomeDate} from "../../network/api";
import NewPerson from "./childComps/NewPerson";
import sellWell from "./childComps/sellWell";
import BottomMessage from "./childComps/BottomMessage";

export default {
  name: "HomeTest",
  components: {
    NewPerson,
    sellWell,
    BottomMessage
  },
  data() {
    return {
      imgURL: [require('../../assets/img/home/1.png'),
        require('../../assets/img/home/2.png'),
        require('../../assets/img/home/3.png')],
      goods_img: [
        {
          imgURL: require('../../assets/img/myou/1.png'),
          good_test: "新品发布"
        },
        {
          imgURL: require('../../assets/img/myou/2.png'),
          good_test: "新品发布"
        },
        {
          imgURL: require('../../assets/img/myou/3.png'),
          good_test: "新品发布"
        },
        {
          imgURL: require('../../assets/img/myou/4.png'),
          good_test: "新品发布"
        },
        {
          imgURL: require('../../assets/img/myou/5.png'),
          good_test: "新品发布"
        },
        {
          imgURL: require('../../assets/img/myou/6.png'),
          good_test: "新品发布"
        },
        {
          imgURL: require('../../assets/img/myou/7.png'),
          good_test: "新品发布"
        },
        {
          imgURL: require('../../assets/img/myou/8.png'),
          good_test: "新品发布"
        },
        {
          imgURL: require('../../assets/img/myou/9.png'),
          good_test: "新品发布"
        },
        {
          imgURL: require('../../assets/img/myou/10.gif'),
          good_test: "新品发布"
        }
      ]
    }
  },
  created() {
    getHomeDate().then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    getPopup() {
      this.$router.push('./home/popup')
    }
  }
}
</script>

<style scoped>

.header {
  background-color: darkblue;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  text-align: center;
  color: white;
}

.space1 {
  height: 20px;
  background: seashell;

}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  height: 180px;
  text-align: center;
  background-color: #39a9ed;
}

.imgs {
  width: 100%;
  height: 180px;

}

.grid-item {

}

.serve_info span {
  color: red;

}

.windows_goods {
  border: hidden;
  font-size: 10px;
}

.windows_goods img {
  width: 50px;
}

.space {
  height: 16px;
  background: whitesmoke;

}

.new_person {
  width: 100%;
  height: 290px;
}
</style>
