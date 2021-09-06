import {Beer} from "../models/Beer";

export interface GetRandomBeer {
    get(params?: GetRandomBeer.Params): Promise<Beer>
}

export namespace GetRandomBeer {
    export type Params = {
        url: string
    }
}