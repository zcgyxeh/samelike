<template>
  <div class="recommd">
    <div v-for="item in recomends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props:{
    recomends:{
      type:Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
 .recommd{
   display: flex;
   width: 100%;
   text-align:center;
   font-size: 12px;
   padding: 15px 0 30px;
   border-bottom: 8px solid #eee;
 }
 .recommend-item{
   flex: 1;
 }
 .recommend-item img{
   width: 65px;
   height: 65px;
   margin-bottom: 10px;

 }

</style>
