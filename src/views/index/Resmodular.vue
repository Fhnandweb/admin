<template>
  <div class="app-res">
    <div class="resmodular"
         v-for="(item,index) in list"
         :key="item">
      <div>{{index+1}}</div>
      <div>{{item}}</div>
      <div>
        <div class="pointLight"
             v-for="(index,item) in 10"
             :key="item">
          <button></button>CA{{index}}
        </div>
      </div>
      <div>
        <button class="mbutton">恢复确认</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-res',
  data () {
    return {
      list: ['CA', 'RA', 'KM', '官网']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~@/assets/css/global.less"; //全局变量存放的文件
.resmodular {
  color: aliceblue;
  background: @resbgcolor;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 5px;
}
.resmodular > div:nth-child(3) {
  display: flex;
  width: 50%;
  flex-wrap: wrap;
}
.resmodular > div:nth-child(1) {
  width: 10%;
  text-align: center;
  font-size: 20px;
}
.resmodular > div:nth-child(2) {
  width: 20%;
  text-align: center;
  font-size: 20px;
}
.resmodular > div:nth-child(4) {
  width: 20%;
  text-align: center;
  button {
    border: 0;
    width: 80px;
    height: 30px;
    border-radius: 5%;
    background: @btnprimary;
    color: #fff;
  }
}
.pointLight {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  button {
    width: 20px;
    height: 20px;
    border: 0;
    border-radius: 50%;
    background: @nomal;
  }
}
</style>
