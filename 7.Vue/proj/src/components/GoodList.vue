<template>
    <div name="show">
        <ul>
            <li v-for="(good,index) in goods" :key="index">
                <img :src="good.img" alt="">
                <!-- <img :src="require('~' + good.img)" alt=""> -->
                <p>{{ good.goodName}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'GoodList',
        props:{
            goodId:Number
        },
        data(){
            var obj=this;
            var url = "";
            if(obj.goodId == "1"){
                    url = "/json/bjb.json"
                }else if(obj.goodId == "2"){
                    url = "json/sj.json"
                }
            this.$http.get(url).then((res)=>{
                obj.goods = res.data;
            })
            return{
                goods: []
            }
        },
        watch: {
            goodId(){
                var obj = this;
                var url = "";
                if(obj.goodId == "1"){
                    url = "json/bjb.json"
                }else if(obj.goodId == "2"){
                    url = "json/sj.json"
                }
                this.$http.get(url).then((res)=>{
                obj.goods = res.data;
                 console.log(obj.goods)
            })
            return{
                goods: []
            }
            }
        }
    }
</script>

<style scoped>
    ul li{
        list-style: none;
        float: left;
        margin-left: 16px;
        margin-top: 26px;
    }
    ul li img{
        width: 180px;
        height: 120px;
        margin-bottom: 8px;
    }
    ul li p{
        font-size: 12px;
        color: red;
        
        width: 180px;
        text-align: center;
    }
</style>