import router from '../core/router'
import list from "@/pages/list.vue";

export class AppService {
    static instance: AppService

    constructor() {
        return AppService.instance = AppService.instance || this
    }

    login() {

    }

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
