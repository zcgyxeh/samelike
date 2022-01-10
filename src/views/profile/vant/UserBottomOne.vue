<template>
  <van-grid>
    <van-grid-item  >
      <span class="span-item">团币</span>
      <span>100</span>
    </van-grid-item>
    <van-grid-item  >
      <span class="span-item">团优惠</span>
      <span>100</span>
    </van-grid-item>
    <van-grid-item  >
      <span class="span-item">关注</span>
      <span>100</span>
    </van-grid-item>
    <van-grid-item  >
      <span class="span-item">粉丝</span>
      <span>100</span>
    </van-grid-item>
  </van-grid>
</template>

<script>
import Vue from 'vue';
import { Grid, GridItem } from 'vant'

Vue.use(Grid);
Vue.use(GridItem);
export default {
  name: "UserBottomOne"
}
</script>

<style scoped>
.span-item{
  margin-bottom: 5px;
  color: darkblue;
}
/*span {*/
/*  color: darkblue;*/
/*}*/
</style>
