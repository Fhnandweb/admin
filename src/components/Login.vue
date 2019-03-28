<template>
  <div class="app-login">
    <div class="mcontainer">
      <Card style="width:200px">
        <div class="cardContainer">
          <img src="../assets/imgs/logo/odin.png"
               style="width:100%;height:180px"
               alt="picture">
          <h3 style="text-align:center">云盾产品监测系统</h3>
        </div>
      </Card>
      <Card shadow>
        <div>
          <p class="pfont">key密码</p>

          <i-input :value.sync="value"
                   placeholder="请输入密码"
                   style="width: 300px">
            <i-button slot="prepend"
                      icon="ios-key"></i-button>
          </i-input>
        </div>
        <div class="btn-p">
          <i-button type="primary"
                    @click="handleSubmit"
                    long>登陆</i-button>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      value: ''
    }
  },
  methods: {
    handleSubmit (nodesc) {
      this.$Notice.success({
        title: '消息通知',
        desc: '登陆成功！'
      })
      this.$router.push('/index')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
@import "~@/assets/css/global.less"; //全局变量存放的文件
.app-login {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: @bgColor;
}
.mcontainer {
  display: flex;
  p {
    color: @mfontColor;
  }
}
.mcontainer > div:first-child {
  width: 170px;
  background: #282828;
  padding: 5px;
  h4 {
    color: @mfontColor;
  }
}
.ivu-card {
  background: @garyColor;
  color: @mfontColor;
  border: 0;
  padding: 30px;
}
.pfont {
  color: @mfontColor;
  margin-bottom: 10px;
}
.cardContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
// button
.btn-p {
  margin-top: 40px;
}
.ivu-btn-icon-only {
  padding: 5px 5px 6px;
}
</style>
