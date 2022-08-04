import {createApp} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './core/router'
import store from './core/store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import {Client} from './core/client/client';
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import {AppService} from "@/services/app.service";

let client = new Client();
const appService = new AppService()

// 处理返回结果
client.addAfterInterceptor((res: any) => {
    if (res.principal) {
        // 处理auth/user接口
        return res
    }
    if (res.code === 401) {
        // token过期
        router.push('/login')
        return
    }
    return res.data || true;
})

// 动态路由
appService.addRoutes()

const app = createApp(App);
app.use(store).use(router).use(ElementPlus, {locale: zhCn}).mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

// function addRoutes() {
//     let routes: any = localStorage.getItem('routes');
//     if (routes) {
//         routes = JSON.parse(routes);
//         for (let route of routes) {
//             route.component = '';
//             if (route.children && route.children.length) {
//                 for (let subRoute of route.children) {
//                     subRoute.component = () => import(`@/packages${subRoute.path}/index.vue`).then(res => res.default).catch(() => list)
//                 }
//             }
//             if (route.meta) {
//                 router.addRoute('main', route)
//             }
//         }
//     }
// }
