<template>
  <div class="box">
    <van-nav-bar
      title="意见中心"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-cell title="常见问题" is-link to="" />
    <van-cell title="联系客服" is-link to="" />
    <van-cell title="帮助" is-link to="" />
  </div>
</template>

<script>
export default {
  name: "ServiceCenter",
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
