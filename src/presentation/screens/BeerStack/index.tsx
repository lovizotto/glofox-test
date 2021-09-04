import * as React from 'react';
import {RemoteGetRandomBeer} from "../../../data/usecases/RemoteGetRandomBeer";
import {RootTabScreenProps} from "../../../../types";
import BeerScreen from "./BeerScreen";
import {AxiosImpl} from "../../../infra/http/impl/AxiosImpl";

const tmpAPI_URL = "https://api.punkapi.com/v2"

const BeerStack = ({ navigation }: RootTabScreenProps<'Beers'>) => {
    const getBeerHttp = new AxiosImpl();
    const remoteGetRandomBeer = new RemoteGetRandomBeer(
        `${tmpAPI_URL}/beers/random`,
        getBeerHttp
    );

    return <BeerScreen getRandomBeer={remoteGetRandomBeer} {...navigation} />
}

export default BeerStack