<template>
  <div class="box">
    <van-nav-bar
      title="全部"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-tabs v-model="active" animated>
      <van-tab title="全部">
        <van-swipe-cell>
          <van-card
            num="2"
            price="2.00"
            desc="黑全麦欧包面"
            title="黑全麦欧包面包无糖精带馅无减0低肥卡油脂肪代餐饱腹早餐零食品"
            class="goods-card"
            :thumb="imgURL1"
          />
          <template #right>
            <van-button square text="删除" type="danger" class="delete-button" />
          </template>
        </van-swipe-cell>
        <van-swipe-cell>
          <van-card
            num="2"
            price="2.00"
            desc="比比赞海苔肉松吐司面包整箱早餐蛋糕夹心健康小零食小吃休闲食品"
            title="海苔肉松"
            class="goods-card"
            :thumb="imgURL2"
          />
          <template #right>
            <van-button square text="删除" type="danger" class="delete-button" />
          </template>
        </van-swipe-cell>
      </van-tab>
      <van-tab title="代收款">
        <van-empty description="描述文字" />
      </van-tab>
      <van-tab title="待付款"><van-empty description="描述文字" /></van-tab>
      <van-tab title="已完成"><van-empty description="描述文字" /></van-tab>
      <van-tab title="已取消"><van-empty description="描述文字" /></van-tab>
    </van-tabs>
  </div>
</template>



<script>
export default {
  name: "MyOrder",
  methods: {
    onClickLeft() {
      // Toast('返回');
      this.$router.push('/profile');
    }
  },
  data() {
    return {
      active: 0,
      imgURL1:require('assets/img/product/bread/1/1.jpg'),
      imgURL2:require('assets/img/product/bread/2/2.jpg'),
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
.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}

</style>
