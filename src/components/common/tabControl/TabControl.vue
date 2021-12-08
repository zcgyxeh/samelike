<template>
<div class="tab-control">
  <div v-for="item in titles" class="tab-control-item">
    <a href=""><span>{{item}}</span>/a>

  </div>
</div>
</template>

<script>
export default {
  name: "TabControl",
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
}
.tab-control-item{
  flex: 1;
  height: 44px;
  line-height: 40px;
}
</style>
