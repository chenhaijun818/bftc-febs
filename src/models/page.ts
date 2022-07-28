export class Page {
    name = ''
    listApi = ''
    apiMethod = ''
    columns = []
    params = []
    filters = []
    handlers = []

    constructor(options: any) {
        this.name = options.name
        this.listApi = options.listApi
        this.apiMethod = options.apiMethod
        this.columns = options.columns
        this.params = options.params
        this.filters = options.filters
        this.handlers = options.handlers
    }
}
