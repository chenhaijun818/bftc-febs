export class AuthService {
    static instance: AuthService

    permissions = []

    constructor() {
        return AuthService.instance = AuthService.instance || this;
    }

    // 尝试从localStorage中读取权限列表
    init() {
        let permissions: any = localStorage.getItem('permissions');
        if (permissions) {
            permissions = JSON.parse(permissions);
            this.setPermissions(permissions)
        }
    }

    setPermissions(data: any) {
        this.permissions = data;
    }

    checkPermission(permission: string) {
        return !!this.permissions.find(p => p === permission)
    }

    login() {
    }

    logout() {
    }

}
