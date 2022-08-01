// 描述通用列表页每一列的model
interface Column {
    label: string  // 显示在表头的名字
    prop: string   // 显示哪个字段
    type?: string   // 此列的数据类型，默认string 可自定义为timestamp|date等
    filter?: Function    // 比较复杂的数据处理就用这个函数来处理
}
