<template>
  <div class="mbox">
    <div class="single"
         v-for="(item,index) in list"
         :key="item.id">
      <!-- 顶 -->
      <div>
        <div>
          <img :src="index == 0 ? picTop : picUp"
               @click="upClick(index)"
               alt="">
        </div>
      </div>
      <!--  -->
      <div>{{index+1}}</div>
      <div>{{item.name}}</div>
      <div>

        <!-- 单个小方框 向左右-->
        <div v-for="(item,index) in btnList"
             :key="item.id">
          <div>
            <button class="greenBtn"></button>
            <span class="fontSpan">{{item.name}}</span>
            <span class="arrow">
              <span @click="leftArrow(index)"
                    v-if="index!==0">
                <Icon type="ios-arrow-back"
                      color="#1296db"
                      size="22"></Icon>
              </span>
              <span @click="rightArrow(index)"
                    v-if="index!==btnList.length-1">
                <Icon type="ios-arrow-forward"
                      color="#1296db"
                      size="22"></Icon>
              </span>
            </span>
          </div>
        </div>

        <!--  -->
      </div>
    </div>
    <!--  -->

    <!--  -->
  </div>
</template>

<script>
import picTop from '../../assets/imgs/logo/top.png'
import picUp from '../../assets/imgs/logo/up.png'
export default {
  name: 'single',
  data () {
    return {
      picTop: picTop,
      picUp: picUp,
      list: [
        { lid: 1, name: '应用程序CA' },
        { lid: 2, name: '电子签章系统' },
        { lid: 3, name: '官网' },
        { lid: 4, name: '时间戳系统' }
      ],
      btnList: [
        { name: 'CA1' },
        { name: 'CA2' },
        { name: 'CA3' },
        { name: 'CA4' }
      ]
    }
  },
  methods: {
    leftArrow (index) {
      console.log('left')
      if (index !== 0) {
        this.btnList[index] = this.btnList.splice(index - 1, 1, this.btnList[index])[0]
      }
    },
    rightArrow (index) {
      console.log('right')
      if (index !== this.btnList.length - 1) {
        this.btnList[index] = this.btnList.splice(index + 1, 1, this.btnList[index])[0]
      }
    },
    upClick (index) {
      if (index !== 0) {
        this.list[index] = this.list.splice(index - 1, 1, this.list[index])[0]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~@/assets/css/global.less"; //全局变量存放的文件
.single {
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding: 15px 10px;
  font-size: 16px;
  background: #434343;
  &:hover {
    background: #4a4a4a;
  }
  .arrow {
    cursor: pointer;
    &:hover {
      transform: scale(1.4, 1.4);
    }
  }
  .fontSpan {
    font-size: 10px;
  }
  > div:first-child {
    width: 10%;
    > div:first-child {
      width: 30px;
      height: 30px;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
        &:hover {
          transform: scale(1.5, 1.5);
        }
      }
    }
  }
  > div:nth-child(2) {
    width: 10%;
  }
  > div:nth-child(3) {
    width: 30%;
  }
  > div:nth-child(4) {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    > div {
      width: 50px;
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      > div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid #666;
        border-radius: 5%;
        button {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 0;
        }
        .greenBtn {
          background: #0f0;
        }
        .redBtn {
          background: #f00;
        }
      }
    }
  }
}
</style>
