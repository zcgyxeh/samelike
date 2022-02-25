<template>
  <div class="box">
    <van-nav-bar
      title="设置"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-cell title="意见反馈" is-link to="" />
    <van-cell title="版本说明" is-link to="" />
    <van-cell title="关于我们" is-link to="" />
    <van-cell title="好评鼓励" is-link to="" />


    <van-button class="van-button" color="darkblue" type="primary" block>退出</van-button>
  </div>
</template>

<script>
export default {
  name: "SystemSetup",
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
.van-button{
  margin-top: 80px;

  border-radius: 10px;
}
</style>
