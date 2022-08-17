import {Page} from "@/models/page";

export const page = new Page({
    name: 'system-role',
    listApi: 'system/role',
    apiMethod: 'GET',
    buttons: [],
    handlers: [],
    columns: [
        {label: '角色名称', prop: 'roleName'},
        {label: '角色描述', prop: 'remark'},
        {label: '创建时间', prop: 'createTime'},
    ]
})
