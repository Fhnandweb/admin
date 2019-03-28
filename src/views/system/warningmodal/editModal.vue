<template>
  <div class="apply-modal"
       v-show="isShowEdit">
    <div class="mask"></div>
    <div class="modal">
      <Card>
        <p slot="title"
           class="cardHead"><span>修改预警</span><span @click="handleCancle">
            <Icon type="ios-close"
                  size="25"
                  color="#000"></Icon>
          </span></p>
        <div class="otherMain">
          <!-- main -->
          <ul>
            <li>
              <i-input :value="editSend"></i-input>
            </li>
            <li>
              <i-select v-model="select1"
                        multiple>
                <i-option v-for="item in tipsList"
                          :key="item.id"
                          :value="item.value">{{ item.label }}</i-option>
              </i-select>
            </li>
            <li>
              <i-input placeholder="请输入手机号"
                       v-model="tel"></i-input>
            </li>
            <li>
              <i-select v-model="select2">
                <i-option v-for="item in itemList"
                          :key="item.id"
                          :value="item.value">{{ item.label }}</i-option>
              </i-select>
            </li>
            <li class="mli">
              <i-button @click="cancle">取消</i-button>
              <i-button type="primary"
                        @click="submit"
                        style="margin-left:10px;">确定</i-button>
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
      select1: 'voice',
      tipsList: [
        { value: 'voice', label: '声音' },
        { value: 'message', label: '短信' },
        { value: 'email', label: '邮件' }
      ],
      select2: 5,
      itemList: [
        { value: 5, label: '5分钟' },
        { value: 10, label: '10分钟' },
        { value: 15, label: '15分钟' },
        { value: 20, label: '20分钟' },
        { value: 25, label: '25分钟' },
        { value: 30, label: '30分钟' }
      ],
      tel: ''
    }
  },
  props: ['isShowEdit', 'editSend'],
  methods: {
    handleCancle () {
      this.$emit('pfnEdit', false)
    },
    cancle () {
      this.$emit('pfnEdit', false)
    },
    submit () {
      let data = {}
      data.name = this.editSend
      data.tips = this.select1
      data.phone = this.tel
      data.time = this.select2
      console.log('submit is click', data)
      this.select1 = 'voice'
      this.tel = ''
      this.select2 = 5
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
  position: inherit;
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
    .mli {
      text-align: end;
    }
  }
}
</style>
