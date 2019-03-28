<template>
  <div class="admin">
    <load />
    <div class="layout">
      <Menu mode="horizontal"
            class="myNav"
            theme="dark"
            active-key="1">
        <div class="layout-logo">
          监控管理平台
        </div>
        <div class="goHome">
          <Icon type="ios-home-outline"
                size="25"
                color="#fff"></Icon>
          <a href="/index">返回首页</a>
        </div>
      </Menu>

      <Row>
        <i-col span="3">
          <Menu width="auto"
                theme="dark"
                class="myMenu">
            <Submenu key="1"
                     name="gl">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                系统管理
              </template>
              <!-- <Menu-item name="ff"
                         to="/about">管理员管理</Menu-item> -->
              <Menu-item name="index"
                         to="/admin">管理员管理</Menu-item>
            </Submenu>
            <Submenu key="2"
                     name="ds">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                日志记录
              </template>
              <Menu-item name="kjj"
                         key="2-1"
                         to="/admin/log">系统日志</Menu-item>
              <Menu-item name="fsdfs"
                         key="2-2"
                         to="/admin/blog">业务日志</Menu-item>
              <Menu-item name="all"
                         key="2-3"
                         to="/admin/collect">异常汇总</Menu-item>
            </Submenu>
            <Submenu key="3"
                     name="fds">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                系统配置
              </template>
              <Menu-item name="q"
                         to="/admin/apply"
                         key="3-1">应用配置</Menu-item>
              <Menu-item name="r"
                         to="/admin/warn"
                         key="3-2">预警配置</Menu-item>
              <Menu-item name="y"
                         to="/admin/show"
                         key="3-3">展示配置</Menu-item>
            </Submenu>
          </Menu>
        </i-col>
        <i-col span="21">
          <div class="layout-content-main">
            <!-- 右边内容 -->
            <router-view></router-view>
          </div>
        </i-col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'admin',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~@/assets/css/global.less"; //全局变量存放的文件
.admin {
  width: 100%;
  height: 100%;
  background: @bgColor;
}
// iview
.layout {
  border: 1px solid #d7dde4;
  background: @bgColor;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.ivu-row {
  // min-height: 600px;
  height: 93%;
  background: @bgColor;
}
.layout-logo {
  width: 150px;
  height: 30px;
  line-height: 30px;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
  color: @fontWhite;
  font-size: 18px;
}
.goHome {
  float: right;
  margin-right: 30px;
  a {
    color: @fontWhite;
    margin-left: 5px;
    &:hover {
      color: aquamarine;
    }
  }
}
.layout-content-main {
  padding: 10px;
  height: 100%;
}
.ivu-col-span-3 {
  height: 100%;
}
.ivu-col-span-21 {
  height: 100%;
}
// mycss
.myMenu {
  height: 100%;
  background: @garyColor;
  color: @fontWhite;
  width: 200px;
  li {
    color: @fontWhite;
  }
}
.myNav {
  background: @garyColor;
  margin-bottom: 5px;
  height: 6%;
}
</style>
