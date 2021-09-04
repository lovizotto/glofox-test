import * as React from 'react';
import {RootTabScreenProps} from "../../../../types";
import ListBeersScreen from "./ListBeersScreen";
import {AxiosImpl} from "../../../infra/http/impl/AxiosImpl";
import {RemoteFetchBeers} from "../../../data/usecases/RemoteFetchBeers";

const tmpAPI_URL = "https://api.punkapi.com/v2"

const ListBeersStack = ({ navigation }: RootTabScreenProps<'ListBeers'>) => {
    const fecthBeerHttp = new AxiosImpl();
    const remoteFetchBeers = new RemoteFetchBeers(
        `${tmpAPI_URL}/beers/random`,
        fecthBeerHttp
    );

    return <ListBeersScreen fetchBeers={remoteFetchBeers} {...navigation} />
}

export default ListBeersStack