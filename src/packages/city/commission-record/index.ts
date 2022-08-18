import {Page} from "@/models/page";

export const page = new Page({
    name: 'commission-record',
    listApi: 'user/userCommissionDetails/commissionDetailListManager',
    apiMethod: 'POST',
    buttons: [],
    filters: [
        {
            prop: 'startDate',
            type: 'date',
            default: '2022-07-19 16:46:40',
            placeholder: '选择开始时间'
        },
        {
            prop: 'endDate',
            type: 'date',
            default: '2022-08-18 16:46:40',
            placeholder: '选择结束时间'
        },
    ],
    handlers: [],
    params: {
        startDate: '2022-07-19 16:46:40',
        endDate: '2022-08-18 16:46:40'
    },
    columns: [
        {label: '用户名称', prop: 'detailsUser'},
        {label: '佣金类型', prop: 'detailsTypeName'},
        {label: '说明', prop: 'detailsName'},
        {label: '佣金金额', prop: 'balance'},
        {label: '交易时间', prop: 'balanceTime'},
    ]
})
