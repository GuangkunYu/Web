<template>
  <div class="a">
    <h2>A......</h2> 
    <router-link to="/">回到首页</router-link>
    <router-link to="/a1">下及</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'A'
  }
</script>

<style scoped>

</style>