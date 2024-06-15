<template>
  <div class="practice-container">
    <div class="title-practice">
      <router-link to="/others/position_absolute" class="content"
        >真绝对练习</router-link
      >
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
    height: 40px;
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
  }
}
</style>
