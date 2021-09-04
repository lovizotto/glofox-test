import axios, {AxiosResponse} from "axios";
import {HttpClient} from "../HttpClient";

export class AxiosImpl implements HttpClient {
    async get(params: HttpClient.Params): Promise<any> {
        let axiosResponse: AxiosResponse;
        try {
            axiosResponse = await axios.get(
                params.url,
                {
                    headers: params.headers
                })
        } catch (error) {
            axiosResponse = error.response
        }
        return axiosResponse;
    }
}