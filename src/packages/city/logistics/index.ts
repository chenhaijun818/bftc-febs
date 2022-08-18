import {Page} from "@/models/page";

export const page = new Page({
    name: 'logistics',
    listApi: 'marketing/operationCouponWiped/queryWipedCourierManager',
    apiMethod: 'POST',
    buttons: [],
    filters: [
        {
            prop: 'startTime',
            type: 'date',
            default: '2022-07-19 16:46:40',
            placeholder: '选择开始时间'
        },
        {
            prop: 'endTime',
            type: 'date',
            default: '2022-08-18 16:46:40',
            placeholder: '选择结束时间'
        },
    ],
    handlers: [],
    params:  {
        startTime: '2022-07-19 16:46:40',
        endTime: '2022-08-18 16:46:40'
    },
    columns: [
        {label: '用户名称', prop: 'userName'},
        {label: '用户电话', prop: 'userTell'},
        {label: '商家名称', prop: 'shopName'},
    ]
})
