import React, {useContext, useState} from 'react';
import {Text, View} from "../../components/Themed";
import {TextInput, TextInputProps, TouchableOpacity, TouchableOpacityProps} from "react-native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {GlobalContext} from "../GlobalContext";

type SearchParams = {
    name?: string, date?: string
}
type SearchModalProps = {
    onSearch: ({name, date}: SearchParams) => void,
    navigation: NativeStackNavigationProp<any>
}

const SearchModal: React.FC<SearchModalProps> = ({onSearch, navigation}) => {
    const [name, setName] = useState<string>()
    const [date, setDate] = useState<string>()
    const globalContext = useContext(GlobalContext)
    const handleSubmitButtonClick = () => {
        globalContext.search = {name, date}
        navigation.goBack()
    }

    const handleInputChange = (value: string) => {
        setName(value)
    }

    const handleInputDateChange = (value: string) => {
        setDate(value)
    }

    const handleCancelButtonClick = () => {
        navigation.goBack()
    }

    return (
        <View style={{
            flex: 1,
            flexGrow: 1,
            padding: 16
        }}>
            <View>
                <Label>Beer Name:</Label>
                <SearchInput onChangeText={handleInputChange} placeholder="Beer name"/>
            </View>
            <View>
                <Label>Brewed Before:</Label>
                <SearchInput onChangeText={handleInputDateChange} dataDetectorTypes='calendarEvent'/>
            </View>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <SearchButton title='Cancel' color='#eee' onPress={handleCancelButtonClick}/>
                <SearchButton title='Submit' onPress={handleSubmitButtonClick}/>
            </View>
        </View>
    );
}

const SearchInput = (props: TextInputProps) => (
    <TextInput style={{
        marginBottom: 8,
        fontSize: 16,
        height: 40,
        color: '#000',
        borderBottomColor: '#999',
        borderBottomWidth: 1
    }} {...props}/>
)

const Label: React.FC = (props) => {
    return (
        <Text style={{
            fontSize: 14,
            marginBottom: 4,
            color: '#666'
        }} {...props} />
    )
}

type SearchButtonProps = {
    color?: string,
    title: string,
    onPress: any
}
const SearchButton: React.FC<SearchButtonProps> = ({ title, onPress, color='#ccc' }) => (
    <TouchableOpacity
        style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
            backgroundColor: color,
            marginRight: 12,
            marginLeft: 12,
        }}
        onPress={onPress}
    >
        <Text>{title}</Text>
    </TouchableOpacity>
)

export default SearchModal;