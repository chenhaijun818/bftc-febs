export class UserService {
    static instance: UserService

    name: string = ''

    constructor() {
        return UserService.instance = UserService.instance || this;
    }

    setUserInfo(data: any) {
        this.name = data.username
    }

}
