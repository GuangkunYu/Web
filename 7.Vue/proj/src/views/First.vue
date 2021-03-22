<template>
  <div class="first">
    <div class="left">
        <left-bar></left-bar>
    </div>
    <div class="right">
        <div class="top">
            <img src="@/assets/img/gg.jpg" alt="">
        </div>
        <div class="content">
            <right></right>
        </div>
    </div>
  </div>
</template>

<script>
    import LeftBar from '@/components/LeftBar.vue'
    import Right from '@/components/Right.vue'

    export default {
        name: 'Home',
        components: {
            LeftBar,
            Right
        }
    }
</script>

<style scoped>
    .first{
        width: 1200px;
        margin: 20px auto;
    }
    .left{
        width: 100px;
        float: left;
        margin-right: 20px;
    }
    .right{
        width: 1000px;
        float: left;
    }
    .left, .right{
        background-color: #f5f5f5;
    }
    .top img{
        width: 1000px;
        height: 200px;
    }
</style>
