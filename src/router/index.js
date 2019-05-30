import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/pageHome'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
        }
    ]
})