export interface AxiosHttpClient {
    fetch: (params: AxiosHttpClient.Params) => Promise<any>
}

export namespace AxiosHttpClient {
    export type Params = {
        url: string,
        headers? : {
            [key: string]: string
        }
    }
}