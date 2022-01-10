<template>
  <van-skeleton title avatar :row="3" />
</template>

<script>
import Vue from 'vue';
import { Skeleton } from 'vant';

Vue.use(Skeleton);
export default {
  name: "UserInf"
}
</script>

<style scoped>

</style>
