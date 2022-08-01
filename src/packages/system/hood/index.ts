import {Page} from "@/models/page";
import {UiService} from "@/services/ui.service";
import {Client} from "@/core/client/client";

const ui = new UiService();
const client = new Client();
export const page = new Page({
    name: 'system-hood',
    apiMethod: 'POST',
    listApi: 'system/tHousingEstate/queryEstateList',
    params: [],
    buttons: ['search', 'reset', 'add'],
    filters: [
        {type: 'text', prop: 'cir', placeholder: '请输入小区名'}
    ],
    handlers: [
        {
            icon: 'edit',
            color: 'rgb(45 183 245)',
            click(row: any) {
                console.log(row)
            },
        }, {
            icon: 'delete',
            color: 'rgb(255 85 0)',
            click(row: any) {
                ui.confirm('您确定要删除该小区吗？').then(confirm => {
                    if (confirm) {
                        client.post('system/tHousingEstate/estateDel', {estateIds: [row.id]}).then(res => {
                            console.log(res)
                        })
                    }
                })
            },
        }
    ],
    columns: [
        {label: '小区名', prop: 'ename'},
        {label: '地址', prop: 'address'},
        {label: '创建时间', prop: 'sysCreateTime'},
    ]
})
