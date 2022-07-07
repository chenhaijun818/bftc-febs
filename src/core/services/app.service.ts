export class AppService {
    static instance: AppService

    constructor() {
        return AppService.instance = AppService.instance || this;
    }
}
