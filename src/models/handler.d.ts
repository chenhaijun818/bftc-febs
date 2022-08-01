interface Handler {
    api: string     // 此操作的api
    method: string  // 此操作api 的方法
    type: string    // add | delete | update | view
    success: Function   // 操作成功回调
    params: any     // 调用接口参数
    icon: string    // 显示按钮的图标
    text: string    // 显示按钮的文字
    component: any  // 点击后弹出的窗口组件
    confirmText: string // 确认弹窗的文字
}
