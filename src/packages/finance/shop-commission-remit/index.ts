import {Page} from "@/models/page";

export const page = new Page({
    name: 'shop-commission-remit',
    apiMethod: 'POST',
    listApi: 'city/cityCommissionPayment/queryCityCommissionPaymentList',
    params: {
    },
    buttons: [],
    filters: [],
    handlers: [],
    columns: [
        {label: '商家电话', prop: 'storePhone'},
        {label: '店铺名称', prop: 'storeName'},
        {label: '佣金', prop: 'totalPrice'},
        {label: '生成时间', prop: 'commissionMonth'},
        {label: '打款时间', prop: 'payTime'},
    ]
})
