<template>
  <van-cell-group class="group">
    <van-cell title="我的足迹" is-link to="/profile/MyFootprint"/>
    <van-cell title="我的评价" is-link to="/profile/MyEvaluation"/>
    <van-cell title="地址管理" is-link to="/profile/AddressManagement"/>
    <van-cell title="优惠券" is-link to="/profile/MissionCenter"/>
    <van-cell title="每日签到" is-link to="/profile/CheckInDaily"/>
    <van-cell title="服务中心" is-link to="/profile/ServiceCenter"/>
    <van-cell title="系统设置" is-link to="/profile/SystemSetup"/>
  </van-cell-group>
</template>

<script>
export default {
  name: "Call"
}
</script>

<style scoped>
.group {
  margin-bottom: 100px;
}
</style>
