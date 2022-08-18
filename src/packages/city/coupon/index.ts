import {Page} from "@/models/page";

export const page = new Page({
    name: 'logistics',
    listApi: 'marketing/operationCouponWiped/queryWipedCourierManager',
    apiMethod: 'POST',
    buttons: [],
    filters: [],
    handlers: [],
    params: [],
    columns: [
        {label: '用户名称', prop: 'userName'},
        {label: '用户电话', prop: 'userTell'},
        {label: '商家名称', prop: 'shopName'},
    ]
})
