<template>
  <div class="box">
    <van-nav-bar
      title="我的足迹"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title=""
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
    />
    <van-divider>昨天</van-divider>
    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
    />

    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
    />
  </div>

</template>

<script>
import { Toast } from 'vant'
export default {
  name: "MyFootprint",
  methods: {
    onClickLeft() {
      // Toast('返回');
      this.$router.push('/profile');
    }
  },
}
</script>

<style scoped>
.box{
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height:100%;
  background: #efefef;
  z-index: 10;
}
</style>
