import * as React from 'react';
import {Button, Image, StyleSheet, Switch, TouchableOpacity} from 'react-native';
import {Text, View} from "../../components/Themed";
import {GetRandomBeer} from "../../../domain/usecases/GetRandomBeer";
import {useCallback, useEffect, useState} from "react";
import {Beer} from "../../../domain/models/Beer";
import {tmpAPI_URL} from "./index";

type BeersScreenProps = {
    getRandomBeer: GetRandomBeer
}

const BeerScreen: React.FC<BeersScreenProps> = ({getRandomBeer}) => {
    const [beer, setBeer] = useState<Beer>()
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const randomBeer = useCallback((isAlcoholic) => {
        /**
         * Worst code ever...
         */
        const url = isAlcoholic && `${tmpAPI_URL}beers?abv_lt=1`
        getRandomBeer.get({url})
            .then((res) => {
                setBeer(res);
            });
    }, [getRandomBeer])

    useEffect(() => {
        randomBeer(isEnabled)
    }, [randomBeer, isEnabled]);

    const handleButtonSuggestionClick = () => {
        randomBeer(isEnabled);
    }

    return (
        <View style={styles.container}>
            {beer && (
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        source={{uri: beer.image_url}}
                        style={{
                            width: 100,
                            height: 200,
                        }}
                        resizeMode={"contain"}
                        loadingIndicatorSource={{
                            uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F42254531%2Fxamarin-ios-activity-indicator-with-another-image&psig=AOvVaw3SIUbWJ_e0UjzIRb6SlVQw&ust=1630800463524000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiApKSD5PICFQAAAAAdAAAAABAI"
                        }}
                    />
                    <Text style={{
                        marginTop: 24,
                        fontSize: 16
                    }}>{beer.name}</Text>
                </View>
            )}
            <View style={{ flex: .5, alignItems: "center", justifyContent: "center"}}>
                <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                    <Text style={{
                        marginLeft: 16
                    }}>Show only Alcohol Free</Text>
                </View>
                <SuggestionButton onPress={handleButtonSuggestionClick} />
            </View>
        </View>
    );
}

type SuggestionButtonProps = {
    onPress: any
}
const SuggestionButton: React.FC<SuggestionButtonProps> = ({ onPress }) => {
    return (
        <TouchableOpacity style={{
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black',
            padding: 10,
            marginBottom: 16
        }}
                          onPress={onPress}>
            <Text style={{
                color: 'white',
                fontSize: 16
            }}>Gimme another suggestion</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    toggle: {

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});

export default BeerScreen