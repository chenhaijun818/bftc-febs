export class Page {
    name = ''
    listApi = ''
    apiMethod = ''
    columns = []

    constructor(options: any) {
        this.name = options.name
        this.listApi = options.listApi
        this.apiMethod = options.apiMethod
        this.columns = options.columns
    }
}
