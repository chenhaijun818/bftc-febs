export class AuthService {
    static instance: AuthService

    constructor() {
        return AuthService.instance = AuthService.instance || this;
    }

    setPermissions(data: any) {
        console.log(data)
    }

    login() {
    }

    logout() {
    }

}
