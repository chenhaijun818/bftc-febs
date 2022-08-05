import {Page} from "@/models/page";
import {UiService} from "@/services/ui.service";
import {Client} from "@/core/client/client";
import HoodEditor from './editor.vue'

const ui = new UiService();
const client = new Client();

export const page = new Page({
    name: 'system-hood',
    apiMethod: 'POST',
    listApi: 'system/tHousingEstate/queryEstateList',
    params: [],
    buttons: [
        {
            name: 'add', text: '新增', component: HoodEditor, click() {
                console.log('add')
            }
        }
    ],
    filters: [
        {type: 'text', prop: 'cir', placeholder: '请输入小区名'}
    ],
    // 对列表的操作
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
                return ui.confirm('您确定要删除该小区吗？').then(confirm => {
                    if (confirm) {
                        return client.post('system/tHousingEstate/estateDel', {estateIds: [row.id]}).then(res => {
                            if (res) {
                                ui.success('删除成功')
                            }
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
