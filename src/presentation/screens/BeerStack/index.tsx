import * as React from 'react';
import {GetBeerHttp} from "../../../infra/http/GetBeerHttp";
import {RemoteGetRandomBeer} from "../../../data/usecases/RemoteGetRandomBeer";
import {RootTabScreenProps} from "../../../../types";
import BeerScreen from "./BeerScreen";

const tmpAPI_URL = "https://api.punkapi.com/v2"

const BeerStack = ({ navigation }: RootTabScreenProps<'Beers'>) => {
    const fetchBeersHttp = new GetBeerHttp();
    const remoteGetRandomBeer = new RemoteGetRandomBeer(
        `${tmpAPI_URL}/beers/random`,
        fetchBeersHttp
    );

    console.log(remoteGetRandomBeer)
    return <BeerScreen getRandomBeer={remoteGetRandomBeer} {...navigation} />
}

export default BeerStack