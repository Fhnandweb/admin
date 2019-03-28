<template>
  <div class="business">
    <div class="bContainer">
      <div>业务统计</div>
      <div>2019-03-18</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'business',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~@/assets/css/global.less"; //全局变量存放的文件
.business {
  height: 50%;
  border: 1px solid #fff;
}
.bContainer {
  padding: 20px 20px;
  div:first-child {
    color: @fontWhite;
    font-size: 20px;
  }
  div:last-child {
    padding: 10px 0;
    color: @nomal;
  }
}
</style>
