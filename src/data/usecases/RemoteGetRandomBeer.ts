import {GetRandomBeer} from "../../domain/usecases/GetRandomBeer";
import {Beer} from "../../domain/models/Beer";
import {AxiosImpl} from "../../infra/http/impl/AxiosImpl";

export class RemoteGetRandomBeer implements GetRandomBeer {
    constructor(
        private readonly url: string,
        private readonly getBeerHttp: AxiosImpl
    ) {
    }

    async get(params?: GetRandomBeer.Params): Promise<Beer> {
        const response = await this.getBeerHttp.get({
            url: this.url,
            headers: {
                "Content-Type": "text/json"
            }
        })

        return <Beer>{...response.data?.[0]}
    }

}