<template>
  <van-cell-group>
    <van-cell title="URL 跳转" is-link url="/vant/mobile.html" />
    <van-cell title="路由跳转" is-link to="index" />
    <van-cell title="URL 跳转" is-link url="/vant/mobile.html" />
    <van-cell title="路由跳转" is-link to="index" />
    <van-cell title="URL 跳转" is-link url="/vant/mobile.html" />
    <van-cell title="路由跳转" is-link to="index" />
    <van-cell title="URL 跳转" is-link url="/vant/mobile.html" />
    <van-cell title="路由跳转" is-link to="index" />
    <van-cell title="URL 跳转" is-link url="/vant/mobile.html" />
    <van-cell title="路由跳转" is-link to="index" />
  </van-cell-group>
</template>

<script>
import Vue from 'vue';
import { Cell, CellGroup } from 'vant';

Vue.use(Cell);
Vue.use(CellGroup);
export default {
  name: "Call"
}
</script>

<style scoped>

</style>
