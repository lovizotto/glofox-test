import axios, {AxiosResponse} from "axios";
import {AxiosHttpClient} from "./AxiosHttpClient";

export class GetBeerHttp implements AxiosHttpClient {
    async fetch(params: AxiosHttpClient.Params): Promise<any> {
        let axiosResponse: AxiosResponse;
        try {
            axiosResponse = await axios.get(
                params.url,
                    {
                    headers: params.headers
                })
        } catch(error) {
            axiosResponse = error.response
        }
        return axiosResponse;
    }
}