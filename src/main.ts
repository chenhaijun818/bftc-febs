import {createApp} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './core/router'
import store from './core/store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import {AppService} from "@/services/app.service";
import {UserService} from "@/services/user.service";

const appService = new AppService()
const userService = new UserService()

// 添加网络拦截器
appService.addInterceptors()

// 动态路由
appService.addRoutes()

// 尝试从localStorage初始化用户数据
userService.initUserInfo()

const app = createApp(App);
app.use(store).use(router).use(ElementPlus, {locale: zhCn}).mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
