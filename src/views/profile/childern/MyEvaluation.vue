<template>
  <div class="box">
    <van-nav-bar
      title="我的评价"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-tabs v-model="active">
      <van-tab title="未评价">
        <van-empty description="空" />
      </van-tab>
      <van-tab title="已评价">

        <van-card
          num=""
          price="1000.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
        />
      </van-tab>

    </van-tabs>

  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  name: "MyEvaluation",
  methods: {
    onClickLeft() {
      // Toast('返回');
      this.$router.push('/profile');
    }
  },
  data() {
    return {
      active: 2,
    };
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
