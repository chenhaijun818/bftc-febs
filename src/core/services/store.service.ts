export class StoreService {
    static instance: StoreService

    constructor() {
        return StoreService.instance = StoreService.instance || this
    }
}
