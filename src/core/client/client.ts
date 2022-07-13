const host = process.env.VUE_APP_HOST

export class Client {
    static instance: Client

    constructor() {
        return Client.instance = Client.instance || this
    }

    get(endpoint: string, params: any) {
        return this.request(endpoint, params, 'GET')
    }

    post(endpoint: string, params: any) {
        params = JSON.stringify(params)
        return this.request(endpoint, params, 'POST')
    }

    request(endpoint: string, params: any, method: string) {
        return fetch(`${host}/${endpoint}`, {method, body: params})
    }

}
