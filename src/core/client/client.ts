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
        return this.request(endpoint, params, 'POST')
    }

    request(endpoint: string, params: any, method: string) {
        let headers = new Headers();
        let token = localStorage.getItem('token');
        if (token) {
            headers.append('Authorization', `bearer ${token}`)
        }
        let body = new URLSearchParams(params);
        return fetch(`${host}/${endpoint}`, {method, headers, body: body.toString()})
    }

}
