import {Page} from "@/models/page";

export const page = new Page({
    name: 'shop-audit',
    apiMethod: 'POST',
    listApi: 'city/system/shop/findStoreAutList',
    params: {
    },
    buttons: [],
    filters: [],
    handlers: [],
    columns: [
        {label: '入驻类型', prop: 'enterTypeName'},
        {label: '商家名称', prop: 'shopNickname'},
        {label: '店铺类型', prop: 'industryNames'},
        {label: '商家电话', prop: 'tell'},
        {label: '申请时间', prop: 'applyTime', type: 'timestamp'},
        {label: '签约人', prop: 'signatoryName'},
        {label: '营业时间', prop: 'businessTime'},
        {label: '店铺状态', prop: 'businessStatus'},
    ]
})
