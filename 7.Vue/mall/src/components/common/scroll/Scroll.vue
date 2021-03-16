<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    data(){
      return {
        scroll: {}
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init(){
        setTimeout(()=>{
          // this.$refs.wrapper
          this.scroll = new BScroll(this.$refs.wrapper, {
            probeType: this.probeType,
            click: true,
            pullUpLoad: this.pullUpLoad
          })

          // 监听滚动的位置
          this.scroll.on('scroll', (position)=>{
            // console.log(position);
            this.$emit('scroll', position)
          })
        }, 2000)
      },
      scrollTo(x, y, time=300){
        this.scroll.scrollTo(x, y, time)
      }
    }
  }
</script>

<style scoped>

</style>
