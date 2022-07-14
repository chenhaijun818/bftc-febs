import {createApp} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './core/router'
import store from './core/store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {Client} from './core/client/client';

let client = new Client();

client.addAfterInterceptor((res: any) => {
    return res.data || true;
})

const app = createApp(App);
app.use(store).use(router).use(ElementPlus).mount('#app')


