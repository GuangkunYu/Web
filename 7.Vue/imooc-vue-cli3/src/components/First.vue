<template>
    <div class="first">
        <h2>First.......</h2>
        <router-link to="/a">转向A</router-link>
        &nbsp;&nbsp;
        <router-link to="/b">转向B</router-link>
        <router-view></router-view>
    </div>
    
</template>

<script>
    export default {
        name: 'First'
    }
</script>

<style scoped>
    .first a{
        color: red;
        font-size: 26px;
    }
</style>