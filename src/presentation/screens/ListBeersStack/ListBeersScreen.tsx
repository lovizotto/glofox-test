import React, {useCallback, useContext, useEffect, useRef, useState} from 'react';
import {Text, View} from "../../components/Themed";
import {FetchBeers} from "../../../domain/usecases/FetchBeers";
import {Beer} from "../../../domain/models/Beer";
import {ActivityIndicator, FlatList, Image, ScrollView} from "react-native";
import GlobalContext from "../GlobalContext";

type ListBeersScreenProps = {
    fetchBeers: FetchBeers,
    navigation: any
}

const ListBeersScreen: React.FC<ListBeersScreenProps> = ({fetchBeers, navigation}) => {
    const [listBeers, setListBeers] = useState<Beer[]>([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const globalContext = useContext(GlobalContext)

    const fetch = useCallback((page: number, search: any) => {
        setLoading(true);

        fetchBeers.fetch({page, ...search})
            .then((res) => {
                setListBeers([...listBeers, ...res])
                setLoading(false);
                setPage(page + 1);
            }).catch(e => console.log(e))
    }, [fetchBeers])

    useEffect(() => {
        navigation.addListener('focus', () => fetch(page, globalContext.search));
        return () => {
            setPage(1)
            navigation.removeListener('focus', () => fetch(page, globalContext.search));
        }
    }, [fetch, globalContext.search]);

    const handleEndReached = () => {
        fetch(page, globalContext.search)
    }
    return (
        <View style={{flex: 1}}>
            {loading && (
                <ActivityIndicator color="yellow"/>
            )}
            {listBeers.length > 0 && (
                <FlatList
                    contentContainerStyle={{
                        flexDirection: "column",
                    }}
                    data={listBeers}
                    keyExtractor={item => item.name + item.id}
                    renderItem={({item}) => <Item data={item}/>}
                    onEndReached={handleEndReached}
                    onEndReachedThreshold={0.1}
                    initialNumToRender={10}
                />
            )}
        </View>
    );
}

type ItemProps = {
    data: Beer
}
const Item: React.FC<ItemProps> = ({data}) => {
    return (
        <View style={{
            width: 100,
            margin: 20,
            height: 200,
            flexDirection: 'row',
            alignItems: 'center',
            shadowOffset: {
                width: 1,
                height: 1,
            },
            shadowRadius: 4,
            shadowColor: '#000000'
        }}>
            <Image
                source={{uri: data.image_url}}
                style={{
                    width: 100,
                    height: 180
                }}
                resizeMode="contain"
            />
            <Text>{data.name}</Text>
        </View>
    );
}

export default ListBeersScreen;