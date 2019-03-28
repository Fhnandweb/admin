<template>
  <div class="show">
    <div>
      <div class="mcontainer">
        <div>
          <h3 style="padding-left:10px;font-size:16px;">展示配置</h3>
          <h5>点击箭头可调整展示顺序</h5>
        </div>
        <div class="main">
          <!-- 一条 -->
          <single />
          <!-- 一条 -->
        </div>
      </div>
      <!--  -->
    </div>
  </div>
</template>

<script>

import single from './single'

export default {
  name: 'show',
  data () {
    return {
      keywords: '',
      list: [
        { lid: 1, name: 'CA', type: '声音', time: 5 }
      ]
    }
  },
  methods: {

  },
  created () {

  },
  components: {
    single
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~@/assets/css/global.less"; //全局变量存放的文件
.show {
  background-color: @garyColor;
  color: @fontWhite;
}
.show,
.show > div:first-child,
.mcontainer {
  height: 100%;
  .mcontainer {
    padding: 0 15px;
    > div:first-child {
      padding: 15px 10px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #555;
    }
  }
}
</style>
