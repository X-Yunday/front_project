<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="cross-container">
      <!-- 水平线带向右箭头 -->
      <div class="horizontal-line"></div>
      
      <!-- 垂直线带向上箭头 -->
      <div class="vertical-line"></div>
      
      <!-- 交点坐标显示 -->
      <div class="intersection-text">(0,0)</div>
      <!-- 坐标点列表 -->
      <div class="dot_postion">
        <li v-for="(dot, index) in dots" :key="index">
           <div >
            a{{index+1}} (X:{{ dot.x }}, Y:{{ dot.y }})
          </div>
        </li>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      dots: [] //1.定义一个空数组，用于存储坐标点
    }
  },
  mounted() { //2.在mounted钩子函数中调用getData方法获取数据
    setTimeout(() => {
      this.getData();
    }, 3000);
    
  },
  methods: {  //3.定义getData方法，使用axios获取后端数据
    async getData() {
      try {

        const response = await axios.get('/api/getDotData');
        this.dots = response.data.dots; //4.将获取到的数据赋值给dots数组
        console.log('获取的后端数据：', this.dots);
        // 修改页面标题
        this.$emit("update-value", '显示点坐标'); //5.通过$emit触发父组件传递过来的事件，将标题修改为“显示点坐标”
      } catch (err) {
        console.error('获取数据失败:', err);
      } 
    }
  }
}
</script>

<style scoped>
li {
  display: block; /* 改为块级元素垂直排列 */
  margin: 10px 0; /* 增加垂直间距 */
  padding: 5px 10px;
  /* background: #f5f5f5; */
  /* border-radius: 4px; */
}

/* 坐标系容器 */
.cross-container {
  position: relative;
  width: 400px;
  height: 400px;
  margin: 50px auto;
}

/* 水平线带向右箭头 */
.horizontal-line {
  position: absolute;
  top: 50%;
  width: 100%;
  border-top: 2px solid #000000;
  transform: translateY(-50%);
}

/* 添加向右箭头 */
.horizontal-line::after {
  content: '';
  position: absolute;
  right: -10px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 10px solid #040404;
}

/* 垂直线带向上箭头 */
.vertical-line {
  position: absolute;
  left: 50%;
  height: 100%;
  border-left: 2px solid #080808;
  transform: translateX(-50%);
}

/* 添加向上箭头 */
.vertical-line::after {
  content: '';
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 10px solid #030303;
}

/* 交点坐标文本 */
.intersection-text {
  position: absolute;
  top: 54%;
  left: 43%;
  transform: translate(-50%, -50%);
  padding: 5px 10px;
  font-weight: bold;
  color: #2c3e50;
  font-family: monospace;
  z-index: 10;
}
.dot_postion{
  position: absolute;
  bottom: 35%;
  right: -20%;
  transform: translate(-50%, -50%);
  padding: 5px 10px;
  font-weight: bold;
  color: #2c3e50;
  font-family: monospace;
  z-index: 10;
}

</style>


<!-- git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/X-Yunday/test_project.git
git push -u origin main -->





