export interface HttpClient {
    get?: (params: HttpClient.Params) => Promise<any>
    fetch?: (params: HttpClient.Params) => Promise<any>
}

export namespace HttpClient {
    export type Params = {
        url: string,
        headers? : {
            [key: string]: string
        }
    }
}