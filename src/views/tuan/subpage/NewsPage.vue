<template>
<div class="box">
  <van-nav-bar
    title="姐妹花团"
    left-text=""
    right-text="...."
    left-arrow
    @click-left="onClickLeft"
  />
  <div class="ChatCard">
    <img :src="imgURL" alt="">
    <div>
      <h4>请问我爱健身吗</h4>
      <div class="st">
        兄弟们，最近健身有问题请问我
      </div>
    </div>
  </div>

  <div class="space">

  </div>
  <div class="ChatCard">
    <img :src="imgURL" alt="">
    <div>
      <h4>请问我爱健身吗</h4>
      <div class="sts">
        <div><img :src="imgURL1" alt=""></div>
        <div></div>
        <div><van-button class="botton" type="primary" block>立即团购</van-button></div>

      </div>
    </div>
  </div>

  <div class="Chatinput">
    <form action="">
      <van-icon name="add-o" />
      <input type="text">
      发送
    </form>
  </div>

</div>
</template>

<script>
export default {
  name: "NewsPage",
  props:{

  },
  methods: {
    onClickLeft() {
      // Toast('返回');
      this.$router.push('/tuan');
    }
  },
  data(){
    return{
      pageName: this.$route.query.pageName,
      imgURL:require('assets/img/avatar/1645756526.jpg'),
      imgURL1:require('assets/img/product/bread/1/1.jpg')
    }
  }
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
.ChatCard{
  width: 300px;
  /*background-color: sandybrown;*/
  height: 50px;
  display: flex;
  margin-top: 20px;
}
.ChatCard img{
  border-radius: 10%;
  width: 80px;
  height: 80px;
  margin-left: 20px;
  margin-right: 20px;
}

.st{
  margin-top: 5px;
  border-radius: 10px;
  height: 50px;
  background-color: white;
}
.space{
  height: 40px;
}
.sts{
  margin-top: 5px;
  border-radius: 10px;
  /*height: 50px;*/
  background-color: white;
}
.sts img{
  margin: 0 auto;
  width: 250px;
  height: 250px;
}
.botton{
  width: 100px;
  background-color: darkblue;
  margin: 0 auto;
}
.Chatinput{

  position: fixed;
  left: 0;
  bottom: 0;
  font-size: 20px;
  /*margin: 10px;*/
  background-color: white;
  width: 100%;
  height: 50px;
  line-height: 30px;
}
.Chatinput input{
  border: none;
  background-color: whitesmoke;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
}

</style>
