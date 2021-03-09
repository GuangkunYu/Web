<template>
  <div>
    <h2>-----hello vuex内容-----</h2>
    <h2>{{ $store.state.counter }}</h2>
    <h2>{{ $store.getters.powerCounter }}</h2>
    <h2>{{ $store.getters.ageMoreTwenty }}</h2>
  </div>
</template>

<script>
  export default {
    name: "HelloVuex"
  }
</script>

<style scoped>

</style>
