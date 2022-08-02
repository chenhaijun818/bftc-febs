import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import layout from '@/pages/layout/layout.vue'
import login from '@/pages/login.vue'
import dashboard from "@/pages/dashboard.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'main',
        component: layout,
        children: [
            {
                path: '/',
                name: '首页',
                component: dashboard
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
