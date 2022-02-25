<template>
<div class="box">
  <van-nav-bar
    class="van-nav-bar"
    title="登录"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"

  />
  <div>
    <van-form  @submit="onSubmit" class="form_sub" >
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">

        <van-button round block type="info" native-type="submit">提交</van-button>
        <van-button round block to="/profile/Register" native-type="submit">前往注册</van-button>
      </div>
    </van-form>
  </div>



</div>
</template>

<script>
export default {
  name: "logIn",
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onClickLeft() {
      // Toast('返回');
      this.$router.push('/profile');
    },
    onSubmit(values) {
      console.log('submit', values);
    },
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
.van-nav-bar{
  background: darkblue;
  margin-bottom: 200px;
  color: white;
}




</style>
