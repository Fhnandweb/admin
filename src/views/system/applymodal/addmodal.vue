<template>
  <div class="apply-modal"
       v-show="isShow">
    <div class="mask"></div>
    <div class="modal">
      <Card>
        <p slot="title"
           class="cardHead">
          <span v-show="isShowAdd && !isShowElse">新增应用</span>
          <span v-show="!isShowAdd && !isShowElse">新增应用组</span>
          <span v-show="isShowElse">新增({{addExName}})应用</span>
          <span @click="close">
            <Icon type="ios-close"
                  size="25"
                  color="#000"></Icon>
          </span></p>
        <!-- main -->
        <div class="main"
             v-show="isShowAdd && !isShowElse">
          <!-- add logo -->
          <div class="addLogo">
            <img src="../../../assets/imgs/logo/add.png"
                 @click="showAdd"
                 alt="">
          </div>
          <!--  -->
          <div class="mainList">
            <ul>
              <li v-for="item in choice"
                  :key="item"><span>{{item}}</span> <span>
                  <i-button type="primary"
                            @click="addEx(item)"
                            size="small">新建实例</i-button>
                </span></li>
            </ul>
          </div>
          <!--  -->
        </div>
        <!-- 新增应用组 -->
        <div class="main elseMain"
             v-show="!isShowAdd && !isShowElse">
          <div class="elseAdd">
            <i-input v-model="val"
                     placeholder="请输入应用组名称"></i-input>
          </div>
          <div class="elseBtn">
            <i-button @click="cancle">取消</i-button>
            <i-button type="primary"
                      @click="submit"
                      style="margin-left:10px;">确定</i-button>
          </div>
        </div>
        <!--  -->
        <div class="main otherMain"
             v-show="isShowElse">
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
            <li>
              <i-input class="eInput"
                       readonly
                       value="描述"
                       placeholder="请输入..."></i-input>
              <i-input class="mInput"
                       v-model="apply.agreement"
                       placeholder="请输入..."></i-input>
            </li>
            <li class="mli">
              <img src="../../../assets/imgs/logo/shi.png"
                   style="width:20px;height:20px;"
                   alt="">
            </li>
            <li class="mli">
              <i-button @click="applyCancle">取消</i-button>
              <i-button style="margin-left:10px;"
                        @click="applyAdd"
                        type="primary">确定</i-button>
            </li>
          </ul>
        </div>
        <!--  -->
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  data () {
    return {
      choice: ['CA', 'RA', 'KM', '官网', '电子签章系统', '证书服务平台', 'OCSP'],
      isShowAdd: true,
      isShowElse: false,
      val: '',
      addExName: '',
      // 应用
      apply: {
        name: '',
        ip: '',
        port: '',
        agreement: '',
        describe: ''
      }
    }
  },
  props: ['isShow'],
  methods: {
    // x按钮
    close () {
      this.$emit('pfn', false)
      this.isShowAdd = true
      this.isShowElse = false
    },
    // 应用组
    cancle () {
      this.isShowAdd = true
    },
    submit () {
      this.choice.push(this.val)
      this.val = ''
    },
    // 实例
    addEx (item) {
      console.log('接受', item)
      this.addExName = item
      this.isShowElse = true
    },
    // 应用
    applyCancle () {
      this.isShowElse = false
    },
    applyAdd () {
      console.log('submit is click')
      this.apply.name = ''
      this.apply.ip = ''
      this.apply.port = ''
      this.apply.agreement = ''
    },
    // end
    showAdd () {
      this.isShowAdd = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~@/assets/css/global.less"; //全局变量存放的文件

.apply-modal {
  width: 100%;
  position: inherit;
  .modal {
    width: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 1000;
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
    .addLogo {
      text-align: end;
      > img {
        height: 30px;
        width: 30px;
        cursor: pointer;
        &:hover {
          transform: scale(1.2, 1.2);
        }
      }
    }
    .mainList {
      color: #000;
      border: 1px solid #ddd;
      border-radius: 5px;
      ul {
        list-style: none;
        color: #555;
        li {
          padding: 5px 15px;
          display: flex;
          justify-content: space-between;
          &:hover {
            background: #e6f7ff;
          }
        }
      }
    }
  }
  .mask {
    width: 100%;
    height: 100%;
    background: rgba(200, 200, 200, 0);
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 999;
  }
}
.elseAdd {
  height: 200px;
  display: flex;
  align-items: center;
}
.elseBtn {
  display: flex;
  justify-content: flex-end;
}
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
