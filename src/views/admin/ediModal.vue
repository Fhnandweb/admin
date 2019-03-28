<template>
  <div class="app-modal"
       v-show="isShowEdit">
    <div class="mask"></div>
    <div class="modal">
      <Card>
        <p slot="title"
           class="cardHead"><span>修改管理员</span><span @click="handleCancle">
            <Icon type="ios-close"
                  size="25"
                  color="#000"></Icon>
          </span></p>
        <div>
          <!-- form表单 -->
          <Form label-position="top"
                ref="form"
                :model="form">
            <Form-item label="姓名"
                       prop="name">
              <i-input v-model="editSend.name"
                       readonly></i-input>
            </Form-item>
            <p style="margin-top:10px;"></p>
            <Form-item label="手机"
                       prop="tel">
              <i-input v-model="editSend.tel"
                       placeholder="请输入手机号"></i-input>
            </Form-item>
            <!-- 手机验证提示 -->
            <p style="margin-top:10px"
               v-show="!isShowTel"></p>
            <p v-show="isShowTel"
               style="color:#f00;font-size:12px">手机号不对</p>
            <Form-item label="权限"
                       prop="power">
              <i-select v-model="editSend.power"
                        class="mborder"
                        placeholder="请选择权限">
                <i-option v-for="item in dataList"
                          :key="item.id"
                          :value="item.value">{{ item.label }}</i-option>
              </i-select>
            </Form-item>
            <!-- 权限验证提示 -->
            <p v-show="isShowPower"
               style="color:#f00;font-size:12px">权限未选择</p>
          </Form>
          <div class="btnDouble">
            <i-button size="large"
                      type="primary"
                      @click="handleSubmit">确定</i-button>
            <i-button size="large"
                      @click="handleReset">取消</i-button>
          </div>
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
      form: {
        name: '',
        tel: '',
        power: ''
      },
      dataList: [
        { label: '普通管理员', value: '普通管理员' },
        { label: '超级管理员', value: '超级管理员' }
      ],
      isShowTel: false,
      isShowPower: false
    }
  },
  props: ['isShowEdit', 'editSend'],
  methods: {
    handleCancle () {
      this.$emit('pfnEdit', false)
    },
    handleSubmit (name) {
      // console.log('在这里' + this.editSend.power)
      let myreg = /^1([39]\d|5[0-35-9]|7[3678])\d{8}$/
      if (!myreg.test(this.editSend.tel)) {
        // this.$Message.error('手机号有误!')
        this.isShowTel = true
        setTimeout(() => {
          this.isShowTel = false
        }, 3000)
        this.$emit('pfnEdit', true)
      } else if (!this.editSend.power) {
        // this.$Message.error('权限没有选!')
        this.isShowPower = true
        setTimeout(() => {
          this.isShowPower = false
        }, 3000)
        this.$emit('pfnEdit', true)
      } else {
        let list = { name: this.editSend.name, tel: this.editSend.tel, rol: this.editSend.power, index: this.editSend.index }
        this.$emit('pReceiveEdit', list)
        this.$emit('pfnEdit', false)
        this.$Message.success('修改成功!')
      }
    },
    handleReset (name) {
      this.$emit('pfnEdit', false)
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
.app-modal {
  width: 100%;
  height: 100%;
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
.ivu-form-item {
  margin-bottom: 0;
}
</style>
