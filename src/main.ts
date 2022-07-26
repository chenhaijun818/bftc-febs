import {createApp} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './core/router'
import store from './core/store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import {Client} from './core/client/client';
import List from "@/views/list.vue";

let client = new Client();

client.addAfterInterceptor((res: any) => {
    console.log(res)
    if (res.code === 401) {
        router.push('/login')
        return
    }
    return res.data || true;
})

// 动态路由
addRoutes()

const app = createApp(App);
app.use(store).use(router).use(ElementPlus).mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

function addRoutes() {
    let routes: any = localStorage.getItem('routes');
    if (routes) {
        routes = JSON.parse(routes);
        for (let route of routes) {
            if (route.children && route.children.length) {
                for (let subRoute of route.children) {
                    let newRoute = {
                        name: subRoute.name,
                        path: subRoute.path,
                        component: List
                    }
                    router.addRoute('main', newRoute)
                }
            }
        }
    }
}
