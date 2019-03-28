<template>
  <div class="apply">

    <div>
      <div :bordered="false">
        <div class="mcontainer">
          <h3>应用配置</h3>
          <div class="headContainer">
            <i-button type="info"
                      style="margin-right:5px;"
                      @click="add">新增应用</i-button>
          </div>
          <!-- table -->
          <div class="mtable">
            <table cellspacing="0"
                   v-for="(n,i) in list"
                   :key="n.id"
                   cellpadding="0">
              <thead>
                <th>{{n.name}}</th>
                <th>{{th.ip}}</th>
                <th>{{th.port}}</th>
                <th>{{th.addr}}</th>
                <th>{{th.desc}}</th>
                <th>操作</th>
              </thead>
              <tbody>
                <tr v-for="(item,index) in n.caseEntityList"
                    :key="item.id">
                  <td>{{item.filename}}</td>
                  <td>{{item.ip}}</td>
                  <td>{{item.port}}</td>
                  <td>{{item.url}}</td>
                  <td>{{item.description}}</td>
                  <td class="ediTd">
                    <span @click="handleEdi(i,index)">修改</span>
                    <span @click="handleDel(index)">删除</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
    <!-- 弹出框 -->
    <addModal :isShow='isShow'
              class="mposition"
              @pfn="parentFn"
              @pReceive="reData" />
    <ediModal :isShowEdit='isShowEdit'
              :editSend='editSend'
              @pfnEdit="parentFnEdit"
              @pReceiveEdit="reDataEdit" />
    <!-- 1 -->
  </div>
</template>

<script>
import addModal from './applymodal/addmodal'
import ediModal from './applymodal/edimodal'
export default {
  name: 'apply',
  data () {
    return {
      keywords: '',
      isShow: false,
      isShowEdit: false,
      editSend: '',
      th: {
        ip: 'IP',
        port: '端口',
        addr: '通讯证书地址',
        desc: '描述'
      },
      list: [
        { name: 'tom',
          caseEntityList: [
            { filename: 'ca1', ip: '192.168.1.101', port: '50362', url: 'e://testca.dat', description: 'CA证书服务器' },
            { filename: 'ca2', ip: '192.168.1.101', port: '50362', url: 'e://testca.dat', description: 'CA证书服务器' }
          ] },
        { name: 'jerry',
          caseEntityList: [
            { filename: 'ca3', ip: '192.168.1.101', port: '50362', url: 'e://testca.dat', description: 'CA证书服务器' },
            { filename: 'ca4', ip: '192.168.1.101', port: '50362', url: 'e://testca.dat', description: 'CA证书服务器' }
          ] }
      ]
    }
  },
  methods: {
    search () {
      console.log('search')
    },
    // 添加
    parentFn (data) {
      this.isShow = data
    },
    reData (data) {
      data.lid = this.list.length + 1
      this.list.push(data)
    },
    add () {
      console.log('add')
      this.isShow = true
    },
    addex () {
      console.log('addex')
      this.isShow = true
    },
    // 修改
    parentFnEdit (data) {
      this.isShowEdit = data
    },
    reDataEdit (data) {
      console.log('edit', data)
      this.list[data.index].rol = data.rol
    },
    handleEdi (i, index) {
      console.log('我是编辑', i, index)
      let sendlist = this.list[index]
      sendlist.index = index
      this.editSend = sendlist
      this.isShowEdit = true
    },
    // 删除
    handleDel (data) {
      console.log('我是删除', data)
    }
  },
  created () {
    // this.axios.post('app/list/app').then((res) => {
    //   console.log(res.data.response)
    //   this.list = res.data.response
    // })
  },
  computed: {
    filterName: function () {
      if (!this.keywords) {
        return this.list
      } else {
        return this.list.filter((item) => {
          return item.ip.match(this.keywords)
        })
      }
    }
  },
  components: {
    addModal,
    ediModal
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~@/assets/css/global.less"; //全局变量存放的文件
.apply,
.ivu-table,
.ivu-card-head p {
  background-color: @garyColor;
  color: @fontWhite;
}
.apply {
  height: 100%;
  // overflow: hidden;
  div:first-child {
    height: 100%;
  }
  .mtable {
    height: 85%;
    overflow-y: scroll;
  }
  .mcontainer {
    padding: 0 15px;
  }
  h3 {
    padding: 15px 0;
    margin-bottom: 20px;
    border-bottom: 1px solid #555;
    font-size: 16px;
  }
}

table {
  width: 100%;
  margin-top: 30px;
  thead {
    width: 100%;
    background: @theadColor;
    th {
      padding: 8px 0;
    }
    th:first-child {
      width: 5%;
    }
    th:nth-child(2) {
      width: 10%;
    }
    th:nth-child(3) {
      width: 15%;
    }
    th:nth-child(4) {
      width: 30%;
    }
    th:nth-child(5) {
      width: 20%;
    }
    th:last-child {
      width: 20%;
    }
  }
  tr {
    text-align: center;
    &:hover {
      background: #444;
    }
    td {
      padding: 10px 0;
      border-bottom: 1px solid #555;
      font-size: 16px;
    }
  }
  .ediTd {
    display: flex;
    justify-content: center;
    span {
      padding: 0 8px;
      cursor: pointer;
    }
    span:hover {
      color: aquamarine;
    }
  }
}
</style>
