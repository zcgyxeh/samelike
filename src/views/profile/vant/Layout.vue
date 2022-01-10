<template>
  <van-row type="flex" justify="space-around" class="header">
    <van-col span="3"><van-icon name="volume-o" /></van-col>
    <van-col span="15"></van-col>
    <van-col span="2"><van-icon name="setting-o"/></van-col>
    <van-col span="2"><van-icon name="cart-o"/></van-col>
  </van-row>
</template>

<script>

import Vue from 'vue';
import { Col, Row } from 'vant';

Vue.use(Col);
Vue.use(Row);

import { Icon } from 'vant';
Vue.use(Icon);

export default {
  name: "Layout"
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
</style>
