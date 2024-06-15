<template>
  <div class="practice-container">
    <div class="title-practice">
      <div class="content">
        <h2>防抖练习</h2>
        <input type="text" name="" id="" placeholder="请输入手机号" />
        <!-- <input type="text" v-model="shakeData" name="" id="" placeholder="请输入手机号" /> -->
        <p>
          防抖，前面的触发都被取消，最后一次执行在规定时间内触发，也就是说快速触发的情况下，仅最后一次触发有效
        </p>
      </div>
    </div>
    <div class="title-practice">
      <div class="content">
        <h2>节流练习</h2>
        <input type="text" name="" id="" placeholder="请输入姓名" />
        <p>
          在规定的间隔时间范围内不会重复触发回调，只有大于这个时间间隔才会触发回调，把频繁触发变为少量触发
        </p>
      </div>
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
  //防抖，前面的触发都被取消，最后一次执行在规定时间内触发，也就是说快速触发的情况下，仅最后一次触发有效
}
</script>
<style scoped lang="less">
* {
  padding: 0;
  margin: 0;
}
.practice-container {
  margin: 5px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  .title-practice {
    width: 400px;
    height: 100px;
    margin-top: 5px;
    background-color: darkgray;
    .content {
      margin: 5px;
      input {
        margin-top: 5px;
      }
    }
  }
}
</style>
