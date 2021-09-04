import {Beer} from "../models/Beer";

export interface GetRandomBeer {
    fetch(params?: GetRandomBeer.Params): Promise<Beer>
}

export namespace GetRandomBeer {
    export type Params = {
        isAlcoholic?: boolean
    }
}