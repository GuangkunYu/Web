<template>
    <div>
        <div v-if="kk==1">
            <good-list :good-id = "1"></good-list>
        </div>
        <div v-if="kk==2">
            <good-list :good-id = "2"></good-list>
        </div>
    </div>
</template>

<script>
import Mdsg from './Mdsg.js'
import GoodList from './GoodList.vue'

export default {
    data(){
        return {
            kk: 0
        }
    },
    components: {
        GoodList
    },
    mounted:function(){
        var _this = this
        Mdsg.$on('val', (m)=>{
            _this.kk = m
        })
    }
}
</script>