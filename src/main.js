import { createApp } from 'vue'
// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/reset.css'
// import './untils/permission'
createApp(App).use(ElementPlus).use(store).use(router).mount('#app')
