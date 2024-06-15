<template>
  <div class="practice-container">
    <div class="title-practice">
      <router-link to="/others/position_absolute" class="content"
        >绝对定位练习</router-link
      >
    </div>
    <div class="title-practice">
      <router-link to="/others/position_absolute" class="content"
        >练习</router-link
      >
    </div>

    <div class="big">
      <div class="box1"></div>
      <div class="box2"></div>
      <div class="box3"></div>
      <div class="box4"></div>
      <div class="box5"></div>
    </div>
  </div>
</template>
<script>
import _ from 'lodash'
export default {
  name: 'practiceJs',
  data() {
    return {
      //存储用户鼠标移上哪一个一级分类
      shakeData: '我是数据',
    }
  },
}
</script>
<style scoped lang="less">
* {
  padding: 0;
  margin: 0;
}
.practice-container {
  display: flex;
  // flex-direction: column;
  .title-practice {
    width: 120px;
    height: 80px;
    margin: 10px;
    background-color: darkgray;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .content {
      font-size: 14px;
      color: blue;
    }
    .content::before {
      content: '“';
      height: 20px;
      background-color: pink;
    }
    .content::after {
      content: '”';
      height: 20px;
      background-color: red;
    }
  }
  /*  
  来源：博客园，https://www.cnblogs.com/czy18227988114/p/11568586.html
  内容：HTML定位——绝对定位和相对定位、固定定位
  我的记忆：https://blog.csdn.net/Sparks550/article/details/127813255
 */
  .big {
    width: 900px;
    height: 600px;
    background-color: #ccc;
    position: relative;
  }

  .box1 {
    width: 150px;
    height: 100px;
    background-color: #124;
    position: relative;
    left: 100px;
    top: 10px;
  }

  .box2 {
    width: 150px;
    height: 100px;
    background-color: red;
    /* position: relative; */
    left: 130px;
    bottom: 50px;
  }

  .box3 {
    width: 150px;
    height: 100px;
    background-color: yellow;
    position: relative;
    left: 170px;
    bottom: 100px;
  }

  .box4 {
    width: 150px;
    height: 100px;
    background-color: blue;
    position: absolute;
    top: 150px;
    left: 200px;
  }

  .box5 {
    width: 150px;
    height: 100px;
    background-color: rgb(27, 173, 83);
  }
}
</style>
