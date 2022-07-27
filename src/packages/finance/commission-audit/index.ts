import {Page} from "@/core/models/page";

export const page = new Page({
    name: 'commission-audit',
    params: [],
    columns: [
        {label: '用户名称', prop: 'userName'},
        {label: '用户电话', prop: 'userTell'},
        {label: '商家名称', prop: 'shopName'},
        {label: '商家电话', prop: 'shopTell'},
        {label: '服务名称', prop: 'serviceName'},
        {label: '订单状态', prop: 'orderStatusName'},
        {label: '订单总金额', prop: 'totalPrice'},
        {label: '实付金额', prop: 'actualPrice'},
        {label: '支付订单号', prop: 'orderNum'},
    ]
})
