<template>
  <div class="log">

    <div>
      <Card :bordered="false">
        <div>
          <h3>系统日志</h3>
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
                       placeholder="请输入要搜索的IP"
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
                <th>用户名</th>
                <th>IP</th>
                <th>URL</th>
                <th>参数</th>
                <th>时间</th>
              </thead>
              <tbody>
                <tr v-for="(item,index) in showList"
                    :key="item.id">
                  <td>{{index+1}}</td>
                  <td>{{item.name}}</td>
                  <td>{{item.ip}}</td>
                  <td>{{item.murl}}</td>
                  <td>{{item.param}}</td>
                  <td>{{item.date}}</td>
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
  name: 'log',
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
        { lid: 1, name: 'tom', ip: '192.168.1.101', param: '{"roles":"697817bc2e06598b...}', murl: 'http://127.0.0.1:8080/common/validateImage.action', date: '2019-03-06' },
        { lid: 2, name: 'jerry', ip: '192.168.1.155', param: '{"roles":"697817bc2e06598b...}', murl: 'http://127.0.0.1:8080/common/validateImage.action', date: '2019-03-06' },
        { lid: 3, name: 'marry', ip: '192.168.1.165', param: '{"roles":"697817bc2e06598b...}', murl: 'http://127.0.0.1:8080/common/validateImage.action', date: '2019-03-06' },
        { lid: 4, name: 'kobe', ip: '192.168.1.111', param: '{"roles":"697817bc2e06598b...}', murl: 'http://127.0.0.1:8080/common/validateImage.action', date: '2019-03-06' },
        { lid: 5, name: 'jsick', ip: '192.168.1.104', param: '{"roles":"697817bc2e06598b...}', murl: 'http://127.0.0.1:8080/common/validateImage.action', date: '2019-03-06' },
        { lid: 6, name: 'jeccy', ip: '192.168.1.177', param: '{"roles":"697817bc2e06598b...}', murl: 'http://127.0.0.1:8080/common/validateImage.action', date: '2019-03-06' }
      ]
    }
  },
  methods: {
    handleChange (daterange) {
      this.dateList = daterange
      let startDate = this.dateList[0]
      let endDate = this.dateList[1]
      console.log('开始时间', startDate, '截止时间', endDate)
    },
    search () {
      console.log('搜素')
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
    //       return item.ip.match(this.keywords)
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
.log,
.ivu-table,
.ivu-card-head p {
  background-color: @garyColor;
  color: @fontWhite;
}

.headContainer {
  display: flex;
  justify-content: space-between;
}
.log h3 {
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
      width: 30%;
    }
    th:last-child {
      width: 10%;
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
