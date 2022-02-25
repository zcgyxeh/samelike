<template>
  <div>
    <div class="box" @click="toPath('/tuan/NewsPage')">
      <div class="left">
        <img :src="imgURL" alt="">
      </div>
      <div class="center">
        <h3>姐妹花团</h3>
        <div>
          <span>今晚来拼购把</span>
        </div>
      </div>
      <div class="right">
        09:28
      </div>
    </div>
    <div class="box">
      <div class="left">
        <img :src="imgURL1" alt="">
      </div>
      <div class="center">
        <h3>姐妹花团</h3>
        <div>
          <span>今晚来拼购把</span>
        </div>
      </div>
      <div class="right">
        09:28
      </div>
    </div>
    <div class="box">
      <div class="left">
        <img :src="imgURL2" alt="">
      </div>
      <div class="center">
        <h3>姐妹花团</h3>
        <div>
          <span>今晚来拼购把</span>
        </div>
      </div>
      <div class="right">
        09:28
      </div>
    </div>
    <div class="box">
      <div class="left">
        <img :src="imgURL3" alt="">
      </div>
      <div class="center">
        <h3>姐妹花团</h3>
        <div>
          <span>今晚来拼购把</span>
        </div>
      </div>
      <div class="right">
        09:28
      </div>
    </div>
    <div class="box">
      <div class="left">
        <img :src="imgURL4" alt="">
      </div>
      <div class="center">
        <h3>姐妹花团</h3>
        <div>
          <span>今晚来拼购把</span>
        </div>
      </div>
      <div class="right">
        09:28
      </div>
    </div>

  </div>


</template>

<script>
export default {
  name: "FriendCard",
  data(){
    return{
      imgURL:require('assets/img/avatar/1.jpeg'),
      imgURL1:require('assets/img/avatar/2.jpeg'),
      imgURL2:require('assets/img/avatar/3.jpeg'),
      imgURL3:require('assets/img/avatar/4.jpeg'),
      imgURL4:require('assets/img/avatar/5.jpeg'),
      imgURL5:require('assets/img/avatar/22223.jpeg'),
      pageName:'姐妹花团'
    }
  },
  methods:{
    toPath(path){
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
.box{
  display: flex;
  flex-direction: row;
  height: 70px;
  /*background-color: #ff8198;*/
}
.left,.center,.right{

  margin-left: 2px;
  /*background-color: darkblue;*/
}
.left{
  padding: 2px;
  width: 20%;
}
.left img{
  /*width: 100%;*/
  /*height: 100%;*/
  width: 65px;
  height: 65px;
}
.center{
  width: 65%;
  /*height: 50px;*/
  /*line-height: 50px;*/
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}
.center,.right{
  border-bottom: 2px solid whitesmoke;
}
.center h3{
  margin-top: 10px;
  color: black;
}
.right{
  width:17% ;
}
</style>
