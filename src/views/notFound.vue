<template>
  <div class="notFound">
    <div>
      <div>
        <img src="../assets/imgs/404/404.png"
             alt="">
      </div>
      <div style="text-align:center;">
        <h1>
          {{msg}}
        </h1>
        <router-link to="/index">{{goback}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'notFound',
  data () {
    return {
      msg: '页面开发中',
      goback: '回到首页'
    }
  }
}
</script>

<style lang="less" scoped>
.notFound {
  height: 100%;
  position: relative;
  > div:first-child {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  a {
    color: rgb(19, 27, 25);
    font-size: 16px;
    &:hover {
      color: #f00;
    }
  }
}
</style>
