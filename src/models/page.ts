// 通用列表页面的model

export class Page {
    name = ''   // 页面名称
    listApi = ''    // 请求列表数据的api
    apiMethod = ''  // 其你去列表数据api的方法 GET|POST...
    columns: Column[] = []    // 显示那些列
    params = []     // 请求列表数据的参数
    filters: Filter[] = []    // 列表筛选条件
    buttons = []    // 页面上方的按钮
    handlers: Handler[] = []   // 对列表数据的操作

    constructor(options: any) {
        this.name = options.name
        this.listApi = options.listApi
        this.apiMethod = options.apiMethod
        this.columns = options.columns
        this.params = options.params
        this.filters = options.filters
        this.buttons = options.buttons
        this.handlers = options.handlers
    }
}
