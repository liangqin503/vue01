import Vue from 'vue'
import App from './App.vue'
//三级联动组件--注册为全局组件
import TypeNav from '@/components/TypeNav';
//第一个参数：全局组件的名字；第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav);

//引入路由
import router from '@/router';
//引入仓库
import store from '@/store';


//测试接口请求
import {reqCategoryList} from '@/api';
reqCategoryList();
new Vue({
  render: h => h(App),
  //注册路由信息：当这里写router的时候，组件身上都拥有$roter和$router
  router,
  //注册仓库:组件实例的身上会多出一个属性,$store属性
  store
}).$mount('#app')