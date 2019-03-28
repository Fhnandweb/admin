<template>
  <div class="logs">
    <div class="logContainer">
      <div>日志记录</div>
      <div>2019-03-08</div>
    </div>
    <business />
  </div>
</template>

<script>
import business from './business'
export default {
  name: 'log',
  data () {
    return {

    }
  },
  components: {
    business
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~@/assets/css/global.less"; //全局变量存放的文件
.logs {
  width: 35%;
  border: 1px solid #fff;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.logContainer {
  padding: 20px 20px;
  height: 50%;
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
