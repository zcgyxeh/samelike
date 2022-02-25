<template>
<div class="box">
  <h2>-新人福利-</h2>
  <div class="left">
    <span>新人专向礼包</span>
    <img src="../../../assets/img/newPerson/1.png" alt="">
  </div>
  <div class="right">
    <div class="top">
      <span>福利社</span>
      <img src="../../../assets/img/newPerson/7.webp" alt="">
    </div>
    <div class="bottom">
      <span>亲人拼团</span>
      <img src="../../../assets/img/newPerson/8.webp" alt="">
    </div>

  </div>

</div>
</template>

<script>
export default {
  name: "NewPerson"
}
</script>

<style scoped>

.box{
  /*float: left;*/
  width: 100%;
}


.box h2{
  text-align: center;
  font-weight: 400;
  font-size: 20px;
}
.left{
  width: 49.5%;
  height: 250px;
  background: #f9e9cf;
  position: absolute;
}
.right{
  width: 49.5%;
  height: 250px;
}
.top img,.bottom img{
  margin-left: 40px

}
.top{
  height: 49%;
  background: #fbe2d3;
}
.top span{
  display:block;
}
.top img{
  width: 75px;
  height: 75px;
}
.bottom{
  background: #ffecc2;
  height: 49%;
  margin-top: 2%;
}


.bottom span{
  display:block;
  position: ;
}


.bottom img{
  width: 100px;
  height: 100px
}

.left img{
  width: 150px;
  height: 150px;
  position: relative;
  left: 20px;
  top: 40px ;
}

.left span{
  position: relative;
  left: 30px;
  top: 20px;
}
</style>
