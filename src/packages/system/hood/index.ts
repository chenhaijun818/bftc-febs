import {Page} from "@/models/page";

export const page = new Page({
    name: 'system-hood',
    apiMethod: 'POST',
    listApi: 'system/tHousingEstate/queryEstateList',
    params: [],
    columns: [
        {label: '小区名', prop: 'ename'},
        {label: '地址', prop: 'address'},
        {label: '创建时间', prop: 'sysCreateTime'},
    ]
})
