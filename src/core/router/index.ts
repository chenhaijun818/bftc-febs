import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import layout from '../../views/layout/layout.vue'
import login from '../../views/login.vue'
import Foo from "@/packages/foo/foo.vue";
import Dashboard from "@/views/dashboard.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'layout',
        component: layout,
        children: [
            {
                path: '/',
                name: 'dashboard',
                component: Dashboard
            }, {
                path: '/foo',
                name: 'foo',
                component: Foo
            }
        ]
    }, {
        path: '/login',
        name: 'login',
        component: login
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
