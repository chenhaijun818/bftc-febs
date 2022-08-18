import {Page} from "@/models/page";

export const page = new Page({
    name: 'privatenumber-fee',
    listApi: 'public/privateNumberFee/queryPrivateNumberFeeList',
    apiMethod: 'POST',
    buttons: [],
    filters: [],
    handlers: [],
    params:  {},
    columns: [
        {label: '订单编号', prop: 'orderCode'},
        {label: '店铺名称', prop: 'storeName'},
        {label: '入驻类型', prop: 'enterType'},
        {label: '店铺联系电话', prop: 'contactPhone'},
        {label: '行业列表', prop: 'industryName'},
        {label: '主叫号码', prop: 'callerNum'},
        {label: '主叫号码（虚拟）', prop: 'calleeNum'},
        {label: '被叫号码（虚拟）', prop: 'fwdDisplayNum'},
        {label: '被叫号码', prop: 'fwdDstNum'},
        {label: '呼叫开始时间', prop: 'fwdStartTime'},
        {label: '呼叫结束时间', prop: 'callEndTime'},
        {label: '业务类型', prop: 'serviceType'},
    ]
})
