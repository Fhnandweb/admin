<template>
  <div class="app-index">
    <!-- loading -->
    <load/>
    <!--  -->
    <div class="layout">
      <div class="layout-header">
        <div class="layout-logo">
          监控管理平台
        </div>
        <div class="logoRight">
          <Icon type="ios-keypad-outline"
                color="#fff"
                size="20"></Icon>
          <a href="/admin">管理入口</a>
        </div>
      </div>
      <div class="spaMain">
        <!-- 子组件 -->
        <tips />
        <log />
      </div>
    </div>
  </div>
</template>

<script>
import tips from '../views/index/tips'
import log from '../views/index/log'
import { setTimeout } from 'timers'
export default {
  name: 'index',
  data () {
    return {
      isSpin: true
    }
  },
  created () {
    setTimeout(() => {
      this.isSpin = false
    }, 1000)
  },
  components: {
    tips,
    log
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~@/assets/css/global.less"; //全局变量存放的文件
.app-index {
  width: 100%;
  height: 100%;
}
// iview
.layout {
  border: 1px solid #d7dde4;
  background: @bgColor;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
}
.layout-logo {
  background: @garyColor;
  height: 30px;
  font-size: 20px;
  font-weight: bold;
  color: @fontWhite;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.logoRight {
  float: right;
  height: 40px;
  line-height: 40px;
  position: relative;
  top: 15px;
  right: 60px;
  a {
    color: @fontWhite;
    padding-left: 5px;
    display: inline-block;
    height: 20px;
    line-height: 20px;
  }
}
.layout-header {
  height: 60px;
  background: @garyColor;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
}
.spaMain {
  margin-top: 5px;
  background: @garyColor;
  display: flex;
  height: 90%;
}
</style>
