<template>
  <div id="app">
    <h2>-----App内容-----</h2>
    <h2>{{ msg }}</h2>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <br>
    <h2>-----App内容：getters相关-----</h2>
    <h2>{{ $store.getters.powerCounter }}</h2>
    <h2>{{ $store.getters.ageMoreTwenty }}</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";

  export default {
    name: 'App',
    data(){
      return{
        msg: '我是App组件'
      }
    },
    components: {
      HelloVuex
    },
    methods: {
      add(){
        this.$store.commit('increment')
      },
      sub(){
        this.$store.commit('decrement')
      }
    }
  }
</script>

<style>
</style>
