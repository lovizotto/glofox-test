import {GetRandomBeer} from "../../domain/usecases/get-random-beer";
import {Beer} from "../../domain/models/Beer";
import {GetBeerHttp} from "../../infra/http/GetBeerHttp";

export class RemoteGetRandomBeer implements GetRandomBeer {
    constructor(
        private readonly url: string,
        private readonly getBeerHttp: GetBeerHttp
    ) {
    }

    async fetch(params?: GetRandomBeer.Params): Promise<Beer> {
        const response = await this.getBeerHttp.fetch({
            url: this.url,
            headers: {
                "Content-Type": "text/json"
            }
        })

        return <Beer>{...response.data?.[0]}
    }

}