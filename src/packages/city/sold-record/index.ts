import {Page} from "@/models/page";

export const page = new Page({
    name: 'sold-record',
    listApi: 'marketing/operationCouponWiped/queryWipedManager',
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
    params: {
        startTime: '2022-07-01 16:46:40',
        endTime: '2022-08-18 16:46:40',
        status: 3
    },
    columns: [
        {label: '优惠券名称', prop: 'couponName'},
        {label: '用户名称', prop: 'userName'},
        {label: '核销码', prop: 'wipedCode'},
        {label: '核销员', prop: 'wipedUserName'},
        {label: '核销员手机', prop: 'wipedUserPhone'},
        {label: '状态', prop: 'status'},
        {label: '核销时间', prop: 'wipedTime'},
        {label: '创建时间', prop: 'createTime'},
    ]
})
