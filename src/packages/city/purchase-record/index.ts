import {Page} from "@/models/page";

export const page = new Page({
    name: 'purchase-record',
    listApi: 'marketing/operationCouponOrder/queryCouponOrder',
    apiMethod: 'POST',
    buttons: [],
    filters: [],
    handlers: [],
    params: {
        startDate: '2022-08-01 16:46:40',
        endDate: '2022-08-18 16:46:40'
    },
    columns: [
        {label: '用户名称', prop: 'buyUserName'},
        {label: '优惠券名称', prop: 'couponName'},
        {label: '推荐人', prop: 'refereeName'},
        {label: '推荐人手机号', prop: 'refereePhone'},
        {label: '实付金额', prop: 'couponAmount'},
        {label: '购买时间', prop: 'payTime'},
    ]
})
