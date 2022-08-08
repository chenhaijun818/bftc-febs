export class UserService {
    static instance: UserService

    name: string = ''

    constructor() {
        return UserService.instance = UserService.instance || this;
    }

    // 尝试从localStorage初始化用户数据
    initUserInfo() {
        let user: any = localStorage.getItem('user')
        if (user) {
            user = JSON.parse(user)
            this.setUserInfo(user)
        }
    }

    // 传入用户数据进行初始化
    setUserInfo(data: any) {
        this.name = data.username
    }


}
