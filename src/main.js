// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VCharts from 'v-charts'
import axios from 'axios';
import { messages } from './components/common/i18n'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/icon/iconfont.css'
import './components/common/dragDirectives'
import vueI18n from 'vue-i18n'

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(vueI18n);
Vue.use(VCharts);

const i18n = new vueI18n({
    locale: 'zh',
    messages
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    i18n,
    components: { App },
    template: '<App/>'
})