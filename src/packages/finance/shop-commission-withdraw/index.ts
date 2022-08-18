import {Page} from "@/models/page";

export const page = new Page({
    name: 'shop-commission-withdraw',
    apiMethod: 'POST',
    listApi: 'city/cityCommissionWithdraw/findCommissionWithdrawList',
    params: {
    },
    buttons: [],
    filters: [],
    handlers: [],
    columns: [
        {label: '店铺名称', prop: 'storeName'},
        {label: '商家电话', prop: 'storeTell'},
        {label: '提现金额', prop: 'withdrawAmount'},
        {label: '手续费', prop: 'withdrawCharge'},
        {label: '提现单号', prop: 'withdrawOrderNum'},
        {label: '申请时间', prop: 'withdrawApplyTime'},
    ]
})
