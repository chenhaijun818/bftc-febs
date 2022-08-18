import {Page} from "@/models/page";

export const page = new Page({
    name: 'privatenumber-sort',
    listApi: 'public/privateNumberFee/queryRankFeeList',
    apiMethod: 'POST',
    buttons: [],
    filters: [],
    handlers: [],
    params: {},
    columns: [
        {label: '店铺名称', prop: 'storeName'},
        {label: '店铺联系电话', prop: 'contactPhone'},
        {label: '行业列表', prop: 'industryName'},
        {label: '联系次数', prop: 'contactNumber'},
    ]
})
