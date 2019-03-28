<template>
  <div class="warning">
    <div>
      <div :bordered="false">
        <div class="mcontainer">
          <h3 style="padding-left:10px;">预警配置</h3>
          <div class="headContainer">
            <div>
              <i-input v-model="keywords"
                       placeholder="请输入要搜索的IP"
                       icon="ios-search"
                       style="width: 300px;margin-right:10px"></i-input>
              <i-button type="primary"
                        @click="search">搜索</i-button>
            </div>
          </div>
          <!-- table -->
          <div class="mtable">
            <table cellspacing="0"
                   cellpadding="0">
              <thead>
                <th>序号</th>
                <th>应用名称</th>
                <th>预警类型</th>
                <th>间隔时间</th>
                <th>操作</th>
              </thead>
              <tbody>
                <tr v-for="(item,index) in filterName"
                    :key="item.id">
                  <td>{{index+1}}</td>
                  <td>{{item.name}}</td>
                  <td>{{item.type}}</td>
                  <td>{{item.time}}分钟</td>
                  <td class="ediTd">
                    <span @click="handleEdi(index)">修改</span>
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
    <ediModal :isShowEdit='isShowEdit'
              :editSend='editSend'
              @pfnEdit="parentFnEdit"
              @pReceiveEdit="reDataEdit" />
    <!-- 1 -->
  </div>
</template>

<script>
import ediModal from './warningmodal/editModal'
export default {
  name: 'warning',
  data () {
    return {
      keywords: '',
      isShow: false,
      isShowEdit: false,
      editSend: '',
      list: [
        { lid: 1, name: 'CA', type: '声音', time: 5 },
        { lid: 2, name: 'RA', type: '短信', time: 10 },
        { lid: 3, name: 'RA', type: '短信', time: 10 },
        { lid: 4, name: 'RA', type: '短信', time: 10 },
        { lid: 5, name: 'RA', type: '短信', time: 10 },
        { lid: 6, name: 'RA', type: '短信', time: 10 }
      ]
    }
  },
  methods: {
    search () {
      console.log('search')
    },
    // 操作
    handleEdi (index) {
      console.log('我是修改', index)
      this.editSend = this.list[index].name
      this.isShowEdit = true
    },
    handleDel (index) {
      console.log('我是删除', index)
      this.list.splice(index, 1)
    },
    // x 关闭
    parentFnEdit (data) {
      // console.log('i am here', data)
      this.isShowEdit = data
    },
    reDataEdit (data) {
      console.log('edit', data)
      this.list[data.index].rol = data.rol
    }
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
    ediModal
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~@/assets/css/global.less"; //全局变量存放的文件
.warning,
.ivu-table,
.ivu-card-head p {
  background-color: @garyColor;
  color: @fontWhite;
}
.warning {
  height: 100%;
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
.headContainer {
  display: flex;
  justify-content: flex-end;
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
      width: 10%;
    }
    th:nth-child(2) {
      width: 10%;
    }
    th:nth-child(3) {
      width: 20%;
    }
    th:nth-child(4) {
      text-align: left;
      width: 40%;
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
    td:nth-child(4) {
      text-align: left;
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
