import {Page} from "@/core/models/page";

export const page = new Page({
    name: 'system-hood',
    apiMethod: 'POST',
    listApi: 'city/system/shop/findStoreAutList',
    params: {
    },
    columns: [
        {label: '小区名', prop: 'ename'},
        {label: '地址', prop: 'address'},
        {label: '店铺类型', prop: 'industryNames'},
        {label: '商家电话', prop: 'tell'},
        {label: '申请时间', prop: 'applyTime', type: 'timestamp'},
        {label: '签约人', prop: 'signatoryName'},
        {label: '营业时间', prop: 'businessTime'},
        {label: '店铺状态', prop: 'businessStatus'},
    ]
})
