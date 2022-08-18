import {Page} from "@/models/page";

export const page = new Page({
    name: 'annual-record',
    listApi: 'city/cityStoreRightsRel/queryCityStoreRightsRelOrders',
    apiMethod: 'POST',
    buttons: [],
    filters: [
        {
            prop: 'startDate',
            type: 'timestamp',
            default: '2022-07-19 16:46:40',
            placeholder: '选择开始时间'
        },
        {
            prop: 'endDate',
            type: 'timestamp',
            default: '2022-08-18 16:46:40',
            placeholder: '选择结束时间'
        },
    ],
    handlers: [],
    params: [],
    columns: [
        {label: '店铺名称', prop: 'storeName'},
        {label: '商家手机号', prop: 'storePhone'},
        {label: '推荐人手机号/姓名', prop: 'refereePhone'},
        {label: '权益类型', prop: 'rightsName'},
        {label: '订单号', prop: 'payOrder'},
        {label: '实付金额', prop: 'actualPrice'},
        {label: '支付时间', prop: 'createTime'},
        {label: '到期时间', prop: 'endDate'},
    ]
})
