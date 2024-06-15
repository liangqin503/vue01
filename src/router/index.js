//配置路由的地方
import Vue from 'vue';
// _vue-router@3.5.3@
import VueRouter from 'vue-router';
//使用插件
Vue.use(VueRouter);
//引入路由组件
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import PracticeJs from '@/pages/PracticeJs';
import PracticeHtml from '@/pages/PracticeHtml';
import Others from '@/pages/Others';
import Position_absolute from '@/pages/Others/Position_absolute';
//配置路由
export default new VueRouter({
    //配置路由
    routes:[
        {
            path:"/home",
            component:Home,
            meta:{show:true}
        },
        {
            path:"/search/:keyword?",
            // path:"/search",
            component:Search,
            meta:{show:true},
            name:"search",
            //路由组件能不能传递props数据？
            // 1.布尔值写法,只能传递params的值
            // props:true
            // 2.对象写法
            // props:{a:1,b:2}
            // 3.函数写法（常用），
            // 
        },
        {
            path:"/login",
            component:Login,
            meta:{show:false}
        },
        {
            path:"/register",
            component:Register,
            meta:{show:false}

        },
        {
            path:"/practiceJs",
            component:PracticeJs,
            meta:{show:false}

        },
           {
            path:"/practiceHtml",
            component:PracticeHtml,
            meta:{show:false}

        },
         {
            path:"/others",
            component:Others,
            meta:{show:false},
             children: [
            {
                path: '/others/position_absolute',
                component:Position_absolute,
            }
                ]
        },
        //重定向，在项目跑起来的时候，访问/，立马定向到首页
        {
            path:"*",
            redirect:"/home"
        },
    ]
})