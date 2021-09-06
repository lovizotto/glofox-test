import {Beer} from "../models/Beer";

export interface FetchBeers {
    fetch(params?: FetchBeers.Params): Promise<any>
}

export namespace FetchBeers {
    export type Params = {
        name?: string,
        date?: string,
        page?: number,
    }
}