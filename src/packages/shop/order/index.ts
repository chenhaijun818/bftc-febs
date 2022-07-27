import {Page} from "@/core/models/page";

export const page = new Page({
    name: 'shop-order',
    apiMethod: 'POST',
    listApi: 'order/systemOrderManage/findSysOrderList',
    params: {
    },
    columns: [
        {label: '店铺名称', prop: 'shopName'},
        {label: '用户电话', prop: 'shopTell'},
        {label: '用户名称', prop: 'userName'},
        {label: '用户电话', prop: 'userTell'},
        {label: '服务类型', prop: 'serviceName'},
        {label: '支付订单号', prop: 'orderNum'},
        {label: '总订单价格', prop: 'totalPrice'},
        {label: '实付订单价格', prop: 'actualPrice'},
        {label: '订单状态', prop: 'orderStatusName'},
        {label: '创建时间', prop: 'orderCreateTime'},
    ]
})
