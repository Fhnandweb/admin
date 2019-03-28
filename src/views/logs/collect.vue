<template>
  <div class="collect">

    <div>
      <Card :bordered="false">
        <div>
          <div class="excel">
            <span>异常汇总</span>
            <i-button type="success"
                      @click="export2Excel">导出成EXCEL</i-button>
          </div>

          <div class="headContainer">
            <div>
              <!-- 日期选择器 -->
              <Date-picker type="daterange"
                           @on-change="handleChange"
                           :value="dateValue"
                           format="yyyy-MM-dd"
                           placeholder="请选择要搜索的时间段"
                           style="color:#000;"
                           placement="bottom-end">
              </Date-picker>

            </div>

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
                <th>实例</th>
                <th>异常信息</th>
                <th>IP</th>
                <th>异常发生时间</th>
                <th>异常持续时间</th>
                <th>修复时间</th>
                <th>修复人</th>
              </thead>
              <tbody>
                <tr v-for="item in showList"
                    :key="item.id">
                  <td>{{item.lid}}</td>
                  <td>{{item.name}}</td>
                  <td>{{item.msg}}</td>
                  <td>{{item.ip}}</td>
                  <td>{{item.stime}}</td>
                  <td>{{item.ctime}}</td>
                  <td>{{item.etime}}</td>
                  <td>{{item.pop}}</td>
                </tr>
                <tr>
                  <td>总计：</td>
                  <td>{{list.length}}</td>
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

export default {
  name: 'collect',
  data () {
    return {
      dateValue: '',
      dateList: [],
      keywords: '',
      // 分页
      totalCount: null,
      current: 1,
      showList: [],
      list: [
        { lid: 1, name: 'CA', ip: '192.168.1.101', msg: '哪里哪里出错', stime: '2019-03-01', etime: '2019-03-06', ctime: '60m', pop: 'tom' },
        { lid: 2, name: 'ca', ip: '192.168.1.155', msg: '哪里哪里出错', stime: '2019-03-01', etime: '2019-03-06', ctime: '60m', pop: 'tom' },
        { lid: 3, name: 'ca', ip: '192.168.1.165', msg: '哪里哪里出错', stime: '2019-03-01', etime: '2019-03-06', ctime: '60m', pop: 'tom' },
        { lid: 4, name: 'ca', ip: '192.168.1.111', msg: '哪里哪里出错', stime: '2019-03-01', etime: '2019-03-06', ctime: '60m', pop: 'tom' },
        { lid: 5, name: 'ca', ip: '192.168.1.104', msg: '哪里哪里出错', stime: '2019-03-01', etime: '2019-03-06', ctime: '60m', pop: 'tom' },
        { lid: 6, name: 'ca', ip: '192.168.1.177', msg: '哪里哪里出错', stime: '2019-03-01', etime: '2019-03-06', ctime: '60m', pop: 'tom' }
      ],
      tableData: []
    }
  },
  methods: {
    handleChange (daterange) {
      this.dateList = daterange
      let startDate = this.dateList[0]
      let endDate = this.dateList[1]
      console.collect('开始时间', startDate, '截止时间', endDate)
    },
    search () {
      console.collect('搜素')
    },
    // excel
    export2Excel () {
      require.ensure([], () => {
        const { export_json_to_excel } = require('../../excel/Export2Excel.js')
        const tHeader = ['序号', '实例', '异常信息', 'ip', '异常发生时间', '异常持续时间', '修复时间', '修复人']
        const filterVal = ['lid', 'name', 'msg', 'ip', 'stime', 'ctime', 'etime', 'pop']
        const list = this.list
        const data = this.formatJson(filterVal, list)
        export_json_to_excel(tHeader, data, '异常汇总表')
      })
    },
    formatJson (filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
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
    // filterName: function () {
    //   if (!this.keywords) {
    //     return this.list
    //   } else {
    //     return this.list.filter((item) => {
    //       return item.name.match(this.keywords)
    //     })
    //   }
    // }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~@/assets/css/global.less"; //全局变量存放的文件
.ivu-card-body,
.ivu-card,
.collect,
.ivu-table,
.ivu-card-head p {
  background-color: @garyColor;
  color: @fontWhite;
}
.collect {
  .excel {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    margin-bottom: 30px;
    border-bottom: 1px solid #555;
    span {
      font-size: 16px;
      font-weight: bold;
    }
  }
}
.headContainer {
  display: flex;
  justify-content: space-between;
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
      width: 5%;
    }
    th:nth-child(3) {
      width: 15%;
    }
    th:nth-child(4) {
      width: 15%;
    }
    th:nth-child(5) {
      width: 15%;
    }
    th:nth-child(6) {
      width: 15%;
    }
    th:nth-child(7) {
      width: 15%;
    }
    th:last-child {
      width: 15%;
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
}
.ivu-page {
  .ivu-page-prev {
    color: red !important;
  }
  .ivu-page-item {
    &.ivu-page-item-active {
      background: pink !important;
    }
  }
}
</style>
