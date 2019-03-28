<template>
  <div class="apply-modal"
       v-show="isShowEdit">
    <div class="mask"></div>
    <div class="modal">
      <Card>
        <p slot="title"
           class="cardHead"><span>修改应用</span><span @click="handleCancle">
            <Icon type="ios-close"
                  size="25"
                  color="#000"></Icon>
          </span></p>
        <div class="otherMain">
          <!-- main -->
          <ul>
            <li><span>应用类别</span><span>参数</span></li>
            <li>
              <i-input class="eInput"
                       readonly
                       :value="addExName"
                       placeholder="请输入..."></i-input>
              <i-input class="mInput"
                       v-model="apply.name"
                       placeholder="请输入..."></i-input>
            </li>
            <li>
              <i-input class="eInput"
                       readonly
                       value="IP地址"
                       placeholder="请输入..."></i-input>
              <i-input class="mInput"
                       v-model="apply.ip"
                       placeholder="请输入..."></i-input>
            </li>
            <li>
              <i-input class="eInput"
                       readonly
                       value="端口"
                       placeholder="请输入..."></i-input>
              <i-input class="mInput"
                       v-model="apply.port"
                       placeholder="请输入..."></i-input>
            </li>
            <li>
              <i-input class="eInput"
                       readonly
                       value="通讯证书"
                       placeholder="请输入..."></i-input>
              <i-input class="mInput"
                       v-model="apply.agreement"
                       placeholder="请输入..."></i-input>
            </li>
            <li class="mli">
              <i-button @click="applyCancle">取消</i-button>
              <i-button style="margin-left:10px;"
                        @click="applyAdd"
                        type="primary">确定</i-button>
            </li>
          </ul>
          <!--  -->
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  data () {
    return {
      isShowTel: false,
      isShowPower: false,
      addExName: '',
      apply: {
        name: '',
        ip: '',
        port: '',
        agreement: ''
      }
    }
  },
  props: ['isShowEdit', 'editSend'],
  methods: {
    handleCancle () {
      this.$emit('pfnEdit', false)
    },
    applyCancle () {
      this.apply.name = ''
      this.apply.ip = ''
      this.apply.port = ''
      this.apply.agreement = ''
      this.$emit('pfnEdit', false)
    },
    applyAdd () {
      console.log('submit is click')
      this.apply.name = ''
      this.apply.ip = ''
      this.apply.port = ''
      this.apply.agreement = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~@/assets/css/global.less"; //全局变量存放的文件

.btnDouble {
  display: flex;
  justify-content: flex-end;
  button:nth-child(2) {
    margin-left: 20px;
  }
}
.apply-modal {
  width: 100%;
  .modal {
    width: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 999;
    .cardHead {
      display: flex;
      justify-content: space-between;
      span:last-child {
        cursor: pointer;
        &:hover {
          color: #f00;
        }
      }
    }
  }
  .mask {
    width: 100%;
    min-height: 400px;
    height: 100%;
    background: rgba(200, 200, 200, 0);
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 100;
  }
}
//
.otherMain {
  color: #000;
  ul {
    list-style: none;
    > li {
      margin-bottom: 10px;
    }
    > li:first-child {
      display: flex;
      > span {
        display: inline-block;
        text-align: center;
      }
      > span:first-child {
        width: 30%;
      }
      > span:last-child {
        width: 70%;
      }
    }
    .mli {
      text-align: end;
      > img {
        cursor: pointer;
        &:hover {
          transform: scale(1.2, 1.2);
        }
      }
    }
  }
}
.mInput {
  width: 70%;
}
.eInput {
  width: 30%;
}
</style>
