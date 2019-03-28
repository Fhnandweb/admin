<template>
  <div class="tips">
    <div>
      <div>正常<button class="nomal"></button></div>
      <div>异常<button class="danger"></button></div>
      <div>停用<button class="blockup"></button></div>
      <div>保留<button class="reatin"></button></div>
    </div>
    <resmodu />
  </div>
</template>

<script>
import resmodu from './Resmodular'
export default {
  name: 'tips',
  data () {
    return {

    }
  },
  components: {
    resmodu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~@/assets/css/global.less"; //全局变量存放的文件
.tips {
  color: @fontWhite;
  width: 65%;
  padding: 15px 10px;
}
.tips > div:first-child {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  div {
    font-size: 20px;
    padding-right: 15px;
  }
  div button {
    height: 15px;
    width: 15px;
    border: 0;
    margin-left: 5px;
    border-radius: 50%;
  }
}
// 指示灯
.nomal {
  background: @nomal;
}
.danger {
  background: @danger;
}
.blockup {
  background: @blockup;
}
.reatin {
  background: @reatin;
}
</style>
