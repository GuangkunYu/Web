<template>
  <div class="good-list-item">
    <img :src = "goodsItem.show.img" alt = "">
    <div class="goods-info">
      <p >{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .good-list-item {
    position: relative;
    padding-bottom: 40px;
    width: 48%;
  }
  .good-list-item img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 5px;
    font-size: 12px;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 30px;
  }
  .goods-info .collect {
    position: relative;
  }
  .goods-info .collect::before {
    position: absolute;
    content: "";
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~@/assets/img/common/collect.svg") 0px 1px/14px 14px;
  }
</style>
