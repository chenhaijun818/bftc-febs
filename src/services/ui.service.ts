import {ElMessage, ElMessageBox, ElLoading} from "element-plus";

export class UiService {
    static instance: UiService

    constructor() {
        return UiService.instance = UiService.instance || this
    }

    /*
    * @param msg alert content
    * @param title alert title
    * */
    alert(msg: string, title = '提示') {
        return ElMessageBox.alert(msg, title, {
            confirmButtonText: '确定',
            showClose: false
        })
    }

    confirm(msg: string, title = '提示') {
        return ElMessageBox.alert(msg, title, {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            showCancelButton: true,
            showClose: false
        }).then(_ => {
            return true
        }).catch(_ => {
            return false
        })
    }

    loading(msg = '加载中...') {
        const loading = ElLoading.service({
            lock: true,
            text: msg,
            background: 'rgba(255, 255, 255, 0.5)',
        })
        setTimeout(() => {
            loading.close()
        }, 10000)
        return loading
    }

    message(msg: string) {
        return ElMessage(msg)
    }

    success(msg: string) {
        return ElMessage.success(msg)
    }

    warning(msg: string) {
        return ElMessage.warning(msg)
    }

    error(msg: string) {
        return ElMessage.error(msg)
    }

}
