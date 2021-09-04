import React, {useEffect, useState} from 'react';
import {Text, View} from "../../components/Themed";
import {FetchBeers} from "../../../domain/usecases/FetchBeers";
import {Beer} from "../../../domain/models/Beer";
import {VirtualizedList} from "react-native";

type ListBeersScreenProps = {
    fetchBeers: FetchBeers
}

const ListBeersScreen: React.FC<ListBeersScreenProps> = ({fetchBeers}) => {
    const [listBeers, setListBeers] = useState<Array<Beer>>()
    // useEffect(() => {
    //     fetchBeers.fetch()
    //         .then((res) => {
    //             setListBeers(res)
    //         })
    //     console.log(fetchBeers)
    // }, []);
    //
    // const getItem = (data: Beer, index: number) => ({
    //     id: Math.random().toString(12).substring(0),
    //     name: data.name
    // });
    //
    // const getItemCount = (data: Array<Beer>) => 50;

    return (
        <View>
            {/*{listBeers && (*/}
            {/*    <VirtualizedList*/}
            {/*        data={listBeers}*/}
            {/*        initialNumToRender={4}*/}
            {/*        renderItem={({item}) => <Item name={item.name}/>}*/}
            {/*        keyExtractor={item => item.id}*/}
            {/*        getItemCount={getItemCount}*/}
            {/*        getItem={getItem}*/}
            {/*    />*/}
            {/*)}*/}
        </View>
    );
}

type ItemProps = {
    name: string
}
const Item: React.FC<ItemProps> = ({name: string}) => (
    <View>
        <Text>{name}</Text>
    </View>
);

export default ListBeersScreen;