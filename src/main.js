import Vue from 'vue';
import '../src/mycesium/config.js'
import colorImgSelect from './globalConfig/colorImgSelect'
import moment from "moment";
//引入elementui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
//引入高彩桥设计的图标
import '@/fonts/iconfont.css';



import App from './App.vue'
import router from './router';
import store from './store';

/* 引入 elementui */
Vue.use(ElementUI);

/* 引入 ant-design-vue  v1.1.3+ */
// Vue.use(antDesignCarousel);
// Vue.use(antDesignIcon);
// Vue.use(antDesignUpload);

//全局修改elementui样式
import './styles/globalSetElementui.scss'


Vue.prototype.$moment = moment;
Vue.config.productionTip = false;


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
