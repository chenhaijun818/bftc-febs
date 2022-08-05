import router from '../core/router'
import list from "@/pages/list.vue";
import {Client} from "@/core/client/client";

const client = new Client();

export class AppService {
    static instance: AppService

    constructor() {
        return AppService.instance = AppService.instance || this
    }

    login() {

    }

    // 添加网络拦截器
    addInterceptors() {
        // 添加前置拦截器
        client.addBeforeInterceptor((req: any) => {
            console.log(req)
            return req
        })

        // 添加后置拦截器
        client.addAfterInterceptor((res: any) => {
            return res;
        })
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
    }

    // 添加当前登录用户的路由
    addRoutes() {
        let routes: any = localStorage.getItem('routes') || '[]';
        routes = JSON.parse(routes);
        for (let route of routes) {
            route.component = '';
            if (route.children && route.children.length) {
                for (let subRoute of route.children) {
                    subRoute.component = () => import(`@/packages${subRoute.path}/index.vue`).then(res => res.default).catch(() => list)
                }
            }
            if (route.meta) {
                router.addRoute('main', route)
            }
        }
    }

    logout() {
        localStorage.removeItem('access_token')
        router.push('/login')
    }

}
