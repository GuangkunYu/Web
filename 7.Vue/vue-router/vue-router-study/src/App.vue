<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link> -->
    <!-- <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link> -->
    <!-- <router-link to="/home" tag="button" replace >首页</router-link>
    <router-link to="/about" tag="button" replace >关于</router-link> -->
   <!-- <button @click="toHome">首页</button>
    <button @click="toAbout">关于</button> -->
    <!-- <router-link to="/user/zs">用户</router-link> -->
    <router-link :to="'/user/'+userId">用户</router-link>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        userId: 'ls'
      }
    },
    // 代码修改路由
    methods: {
      toHome() {
        this.$router.push('/home')
      },
      toAbout() {
        this.$router.push('/about')
      }
    }
  }
</script>

<style>
</style>
