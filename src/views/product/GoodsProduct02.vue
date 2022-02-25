<template>
  <div id="box">
    <van-nav-bar
      title="商品"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />



    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(image, index) in imgURL" :key="index">
        <!--      <img :src="image" alt="">-->
        <img class="imgs" :src="image" alt=""/>
      </van-swipe-item>

    </van-swipe>


    <div id="explain">

      <div class="select">
        <div class="select-left">选额</div>
        <div class="select-right" >
          <van-cell title="选择数量" />
          <van-stepper class="van-stepper" v-model="value" />
        </div>
      </div>
      <div class="select">
        <div class="select-left">地址</div>
        <div class="select-right" @click="showPopup">
          <van-cell title="选择地址" is-link to=""/>
          <!--      <van-cell title="版本说明" is-link to="" />-->
          <!--      <van-cell title="关于我们" is-link to="" />-->
          <!--      <van-cell title="好评鼓励" is-link to="" />-->
          <van-popup v-model="show" position="bottom" :style="{ height: '50%' }"/>
        </div>
      </div>
      <div class="select">
        <div class="select-left">团</div>
        <div class="select-right" @click="showPopup">
          <van-cell title="团购选择" is-link to=""/>
          <van-popup v-model="show" position="bottom" :style="{ height: '50%' }"/>
        </div>
      </div>


    </div>


    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon"/>
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon"/>
      <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon"/>
      <van-goods-action-button
        type="danger"
        text="立即购买"
        @click="onClickButton"
      />
    </van-goods-action>
  </div>
</template>

<script>
import {Toast} from 'vant';

export default {
  name: "GoodsProduct02",
  methods: {
    onClickLeft() {
      // Toast('返回');
      this.$router.push('/category/Goods01');
    },
    onClickIcon() {
      Toast('点击图标');
    },
    onClickButton() {
      Toast('点击按钮');
    },
    showPopup() {
      this.show = !this.show;
    }
  },
  data() {
    return {
      active: 1,
      value: 1,
      show: false,
      imgURL: [
        require('assets/img/product/bread/2/1.jpg'),
        require('assets/img/product/bread/2/2.jpg'),
        require('assets/img/product/bread/2/3.jpg'),
        require('assets/img/product/bread/2/4.jpg'),
        require('assets/img/product/bread/2/5.jpg'),
      ],
    };
  },
}
</script>

<style scoped>
#box {
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 1000px;
  background: whitesmoke;
  z-index: 12;
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  /*line-height: px;*/
  text-align: center;
  background-color: #39a9ed;
}


#explain {
  display: flex;
  margin: 2px auto 20px;
  flex-direction: column;
  width: 98%;
  height: 400px;
  border-radius: 2%;
  /*border-top-left-radius: 2%;*/
  /*border-top-right-radius: 2%;*/
  background: white;

}

.select {
  display: flex;
  flex-direction: row;
  margin: 10px;
  height: 20px;
  width: 100%;
}

.select-left {
  /*background: #ff8198;*/
  width: 60px;
  color: darkgrey;
  margin-top: 12px;

}

.select-right {
  /*background: sandybrown;*/
  flex-grow: 1;
}

.imgs {
  width: 100%;
  height: 380px;
}

.van-stepper{
  z-index: 20;
}
</style>
