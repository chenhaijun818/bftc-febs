import {Page} from "@/models/page";

export const page = new Page({
    name: 'user-commission-remit',
    apiMethod: 'POST',
    listApi: 'user/userCommissionPayment/queryUserCommissionPaymentList',
    params: {
    },
    buttons: [],
    filters: [],
    handlers: [],
    columns: [
        {label: '用户名称', prop: 'userName'},
        {label: '佣金', prop: 'totalPrice'},
        {label: '生成时间', prop: 'commissionMonth'},
        {label: '打款时间', prop: 'payTime'},
    ]
})
