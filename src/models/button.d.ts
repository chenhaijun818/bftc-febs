import {Vue} from "vue-class-component";

interface Button {
    name: string    // 按钮名称，做标识用
    text: string    // 按钮显示文字
    component: Vue  // 按钮点击后弹出的组件

    click(): Promise<any>   // 按钮的点击事件
}
