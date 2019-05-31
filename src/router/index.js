import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


// 懒加载的方式，我们就不需要再用import去引入组件了，直接如下即可。懒加载的好处是当你访问到这个页面的时候才会去加载相关资源，这样的话能提高页面的访问速度。
// component: resolve => require(['./page/linkParamsQuestion.vue'], resolve)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/homePage'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: "自述文件" },
            children: [
                {
                    path: "/homePage",
                    component: resolve => require(['../components/page/homePage'], resolve)
                }
            ]
        }
    ]
})