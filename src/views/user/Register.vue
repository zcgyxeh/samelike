<template>
  <div>
    <div class="box">
      <van-nav-bar
        title="注册"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        class="van-nav-bar"
      />

      <van-form @submit="onSubmit">
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
        <van-field
          v-model="phone"
          name="手机号"
          label="手机号"
          placeholder="手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <van-field
          v-model="authcode"
          type="phone"
          name="验证码"
          label="验证码"
          placeholder="验证码"
          :rules="[{ required: true, message: '请填写验证码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>

    </div>





    <transition name="van-slide-left" >
      <router-view  v-if="$route.path == '/profile/login'"></router-view>
    </transition>



  </div>



</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      username: '',
      password: '',
      phone:'',
      authcode:''
    };
  },
  methods: {
    onClickLeft() {
      // Toast('返回');
      this.$router.push('/profile/login');
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
  margin-bottom:200px;
}
</style>


