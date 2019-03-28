<template>
  <div class="app-modal"
       v-show="isShow">
    <div class="mask"></div>
    <div class="modal">
      <Card>
        <p slot="title"
           class="cardHead"><span>新增管理员</span><span @click="handleCancle">
            <Icon type="ios-close"
                  size="25"
                  color="#000"></Icon>
          </span></p>
        <div>
          <!-- form表单 -->
          <Form label-position="top"
                ref="form"
                :rules="ruleValidate"
                :model="form">
            <Form-item label="姓名"
                       prop="name">
              <i-input v-model="form.name"
                       placeholder="请输入姓名"></i-input>
            </Form-item>

            <Form-item label="手机"
                       prop="tel">
              <i-input v-model="form.tel"
                       placeholder="请输入手机号"></i-input>
            </Form-item>

            <Form-item label="权限"
                       prop="power">
              <i-select v-model="form.power"
                        placeholder="请选择权限">
                <i-option v-for="item in dataList"
                          :key="item.id"
                          :value="item.value">{{ item.label }}</i-option>
              </i-select>
            </Form-item>
          </Form>
          <div class="btnDouble">
            <i-button size="large"
                      type="primary"
                      @click="handleSubmit('form')">确定</i-button>
            <i-button size="large"
                      @click="handleReset('form')">取消</i-button>
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
      ruleValidate: {
        name: [
          { required: true, message: '姓名不能为空', trigger: 'blur' }
        ],
        tel: [
          { required: true, message: '电话不能为空', trigger: 'blur' },
          { type: 'number',
            message: '手机号不对',
            trigger: 'blur',
            transform (value) {
              var myreg = /^1([39]\d|5[0-35-9]|7[3678])\d{8}$/
              if (!myreg.test(value)) {
                return false
              } else {
                return Number(value)
              }
            }
          }
        ],
        power: [
          { required: true, message: '必选项', trigger: 'change' }
        ]
      }
    }
  },
  props: ['isShow'],
  methods: {
    handleCancle () {
      this.$emit('pfn', false)
    },
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('提交成功!')
          // console.log(this.form.name, this.form.tel, this.form.power)
          let list = { name: this.form.name, tel: this.form.tel, rol: this.form.power }
          this.$emit('pReceive', list)
          this.$emit('pfn', false)
          this.$refs[name].resetFields()
        } else {
          this.$Message.error('增加失败!')
        }
      })
    },
    handleReset (name) {
      this.$emit('pfn', false)
      this.$refs[name].resetFields()
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
    // min-height: 1000px;
    height: 100%;
    background: rgba(200, 200, 200, 0);
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 100;
  }
}
</style>
