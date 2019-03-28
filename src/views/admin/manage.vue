<template>
  <div class="manage">
    <!-- 弹出框 -->
    <addModal :isShow='isShow'
              @pfn="parentFn"
              @pReceive="reData" />
    <ediModal :isShowEdit='isShowEdit'
              :editSend='editSend'
              @pfnEdit="parentFnEdit"
              @pReceiveEdit="reDataEdit" />
    <!-- 1 -->
    <div>
      <Card :bordered="false">
        <div>
          <h3>角色管理</h3>
          <div class="headContainer">
            <i-button type="info"
                      @click="add">新增管理员</i-button>
            <div>

              <i-input v-model="keywords"
                       placeholder="请输入要搜索的姓名"
                       icon="ios-search"
                       style="width: 300px;margin-right:10px"></i-input>
              <i-button type="primary"
                        @click="search">搜索</i-button>
            </div>
          </div>
          <!-- table -->
          <div>
            <table cellspacing="0"
                   cellpadding="0">
              <thead>
                <th>序号</th>
                <th>姓名</th>
                <th>电话</th>
                <th>角色</th>
                <th>操作</th>
              </thead>
              <tbody>
                <tr v-for="(item,index) in showList"
                    :key="item.id">
                  <td>{{index+1}}</td>
                  <td>{{item.name}}</td>
                  <td>{{item.tel}}</td>
                  <td>{{item.rol}}</td>
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
      </Card>
      <Page :total="totalCount"
            @on-change="changepage"
            style="padding:10px"
            :current="current"
            show-elevator></Page>
    </div>
  </div>
</template>

<script>
import addModal from './addModal'
import ediModal from './ediModal'
export default {
  name: 'manage',
  data () {
    return {
      isShow: false,
      isShowEdit: false,
      keywords: '',
      val: '',
      editSend: '',
      // 分页
      totalCount: null,
      current: 1,
      showList: [],
      list: [
        { lid: 1, name: 'tom', tel: 12155665687, rol: '超管' },
        { lid: 2, name: 'jerry', tel: 12155665687, rol: '超管' },
        { lid: 3, name: 'marry', tel: 12155665687, rol: '超管' },
        { lid: 4, name: 'kobe', tel: 12155665687, rol: '超管' },
        { lid: 5, name: 'jsick', tel: 12155665687, rol: '超管' },
        { lid: 6, name: 'jeccy', tel: 12155665687, rol: '超管' },
        { lid: 1, name: 'tom', tel: 12155665687, rol: '超管' },
        { lid: 2, name: 'jerry', tel: 12155665687, rol: '超管' },
        { lid: 3, name: 'marry', tel: 12155665687, rol: '超管' },
        { lid: 4, name: 'kobe', tel: 12155665687, rol: '超管' },
        { lid: 5, name: 'jsick', tel: 12155665687, rol: '超管' },
        { lid: 6, name: 'jeccy', tel: 12155665687, rol: '超管' },
        { lid: 1, name: 'tom', tel: 12155665687, rol: '超管' },
        { lid: 2, name: 'jerry', tel: 12155665687, rol: '超管' },
        { lid: 3, name: 'marry', tel: 12155665687, rol: '超管' },
        { lid: 4, name: 'kobe', tel: 12155665687, rol: '超管' },
        { lid: 5, name: 'jsick', tel: 12155665687, rol: '超管' },
        { lid: 6, name: 'jeccy', tel: 12155665687, rol: '超管' },
        { lid: 1, name: 'tom', tel: 12155665687, rol: '超管' },
        { lid: 2, name: 'jerry', tel: 12155665687, rol: '超管' },
        { lid: 3, name: 'marry', tel: 12155665687, rol: '超管' },
        { lid: 4, name: 'kobe', tel: 12155665687, rol: '超管' },
        { lid: 5, name: 'jsick', tel: 12155665687, rol: '超管' },
        { lid: 6, name: 'jeccy', tel: 12155665687, rol: '超管' }
      ]
    }
  },
  methods: {
    // 添加
    parentFn (data) {
      this.isShow = data
    },
    reData (data) {
      data.lid = this.list.length + 1
      this.list.push(data)
    },
    add () {
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
    handleEdi (index) {
      console.log('我是编辑', index)
      let sendlist = this.list[index]
      sendlist.index = index
      this.editSend = sendlist
      this.isShowEdit = true
    },
    // 1
    handleDel (data) {
      console.log('我是删除', data)
      this.list.splice(data, 1)
    },
    ok () {
      this.$Message.info('点击了确定')
    },
    cancel () {
      this.$Message.info('点击了取消')
    },
    search () {
      console.log('search')
    },
    // 分页
    changepage (index) {
      let _start = (index - 1) * 10
      let _end = index * 10
      this.showList = this.list.slice(_start, _end)
    }
  },
  mounted () {
    this.totalCount = this.list.length
    if (this.totalCount < 10) {
      this.showList = this.list
    } else {
      this.showList = this.list.slice(0, 10)
    }
  },
  computed: {

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
.ivu-card-body,
.ivu-card,
.manage,
.ivu-table,
.ivu-card-head p {
  background-color: @garyColor;
  color: @fontWhite;
}
.headContainer {
  display: flex;
  justify-content: space-between;
}
.manage h3 {
  padding: 15px 0;
  margin-bottom: 30px;
  border-bottom: 1px solid #555;
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
      width: 20%;
    }
    th:nth-child(3) {
      width: 20%;
    }
    th:nth-child(4) {
      width: 30%;
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
