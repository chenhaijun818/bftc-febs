import router from '../core/router'

export class AppService {
    static instance: AppService

    constructor() {
        return AppService.instance = AppService.instance || this
    }

    logout() {
        localStorage.removeItem('access_token')
        router.push('/login')
    }

}
