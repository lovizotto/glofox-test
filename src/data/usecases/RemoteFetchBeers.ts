import {Beer} from "../../domain/models/Beer";
import {AxiosImpl} from "../../infra/http/AxiosImpl";
import {FetchBeers} from "../../domain/usecases/FetchBeers";

export class RemoteFetchBeers implements FetchBeers {
    constructor(
        private readonly url: string,
        private readonly fetchBeerHttp: AxiosImpl
    ) {
    }

    async fetch(params?: FetchBeers.Params): Promise<any> {
        console.log(params)
        const response = await this.fetchBeerHttp.get({
            url: this.url,
            headers: {
                "Content-Type": "text/json"
            },
            params: {
                beer_name: params?.name,
                brewed_before: params?.date,
                page: params?.page
            }
        })
        console.log(response.data)
        return response.data
    }

}