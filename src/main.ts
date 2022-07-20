import { createApp } from 'vue'
import App from './App.vue'

// 路由
import router from "@/router/index";

// 引用样式文件
import "@/assets/styles/theme/index.scss";


const app = createApp(App)

app.use(router)
app.mount('#app')
