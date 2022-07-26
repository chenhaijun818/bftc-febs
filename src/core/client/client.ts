const host = process.env.VUE_APP_HOST

export class Client {
    static instance: Client

    beforeInterceptors: any[] = []
    afterInterceptors: any[] = []

    constructor() {
        return Client.instance = Client.instance || this
    }

    get(endpoint: string, params = {}, options = {}) {
        return this.request(endpoint, params, 'GET', options)
    }

    post(endpoint: string, params = {}, options = {}) {
        return this.request(endpoint, params, 'POST', options)
    }

    request(endpoint: string, params: any, method: string, options: any) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let token = localStorage.getItem('access_token');
        if (token) {
            headers.append('Authorization', `bearer ${token}`)
        }
        let url = new URL(`${host}/${endpoint}`);
        let searchParams = new URLSearchParams(params);
        if (method === 'GET') {
            // @ts-ignore
            url.search = searchParams;
            return fetch(url.toString(), {
                headers
            }).then(res => {
                return res.json().then((res: Response) => {
                    return this.useAfterInterceptors(res)
                });
            });
        }

        // @ts-ignore
        return fetch(url, {
            method,
            headers,
            body: searchParams
        }).then(res => {
            return res.json().then((res: Response) => {
                return this.useAfterInterceptors(res)
            });
        });
    }

    addBeforeInterceptor(interceptor: any) {
        this.beforeInterceptors.push(interceptor)
    }

    addAfterInterceptor(interceptor: any) {
        this.afterInterceptors.push(interceptor)
    }

    useAfterInterceptors(response: Response) {
        let res: any = response;
        for (let i of this.afterInterceptors) {
            res = i(res)
        }
        return res
    }
}
