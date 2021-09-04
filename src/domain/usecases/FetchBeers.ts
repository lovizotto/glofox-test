import {Beer} from "../models/Beer";

export interface FetchBeers {
    fetch(params?: FetchBeers.Params): Promise<Array<Beer>>
}

export namespace FetchBeers {
    export type Params = {
        name?: string,
        date?: string
    }
}