<template>
  <div v-show="isSpin"
       class="demo-spin-container demo-spin-col">
    <Spin fix
          size="large"></Spin>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isSpin: true
    }
  },
  created () {
    setTimeout(() => {
      this.isSpin = false
    }, 800)
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~@/assets/css/global.less"; //全局变量存放的文件
.demo-spin-container {
  display: inline-block;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2000;
  background: rgba(44, 187, 206, 0.8);
}
</style>
