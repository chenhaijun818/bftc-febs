import {Page} from "@/models/page";

export const page = new Page({
    name: 'system-user',
    listApi: 'system/user',
    apiMethod: 'GET',
    columns: [
        {label: '用户名', prop: 'username'},
        {label: '性别', prop: 'sex', filter(row: any) {return ['男性', '女性', '保密'][row.sex]}},
        {label: '邮箱', prop: 'email'},
        {label: '部门', prop: 'deptName'},
        {label: '状态', prop: 'status'},
        {label: '创建时间', prop: 'createTime'},
    ]
})
