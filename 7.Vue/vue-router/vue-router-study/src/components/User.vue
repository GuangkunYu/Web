<template>
  <div>
    <h2>用户页面</h2>
    <p>我是用户相关信息</p>
    <h2>{{ $route.params.userId }}</h2>
  </div>

</template>

<script>
  export default{
    name: 'User'
  }
</script>

<style>
</style>
