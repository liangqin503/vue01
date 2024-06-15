<template>
  <div>
    <Header></Header>
    我是根组件
    <!-- 路由组件出口 -->
    <router-view></router-view>
    <!-- <CurveModel></CurveModel> -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import CurveModel from "./components/CurveModel";
export default {
  name: "",
  components: {
    Header,
    Footer,
    CurveModel
  },
};
</script>

<style>
</style>
