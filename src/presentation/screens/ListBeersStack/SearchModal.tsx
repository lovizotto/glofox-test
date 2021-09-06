import React, {useContext, useState} from 'react';
import {Text, View} from "../../components/Themed";
import {Button, TextInput} from "react-native";
import GlobalContext from "../GlobalContext";

type SearchParams = {
    name?: string, date?: string
}
type SearchModalProps = {
    onSearch: ({name, date}: SearchParams) => void
}

const SearchModal: React.FC<SearchModalProps> = ({onSearch}) => {
    const [name, setName] = useState<string>()
    const [date, setDate] = useState<string>()
    const globalContext = useContext(GlobalContext)
    const handleSubmitButtonClick = () => {
        globalContext.search = {name, date}
    }

    const handleInputChange = (value: string) => {
        setName(value)
    }

    const handleInputDateChange = (value: string) => {
        setDate(value)
    }

    const handleCancelButtonClick = () => {

    }

    return (
        <View style={{
            flex: 1
        }}>
            <View>
                <Text>Beer Name:</Text>
                <TextInput onChangeText={handleInputChange} placeholder="Beer name"/>
            </View>
            <View>
                <Text>Brewed Before:</Text>
                <TextInput onChangeText={handleInputDateChange} dataDetectorTypes='calendarEvent'/>
            </View>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Button title='Cancel' onPress={handleCancelButtonClick}/>
                <Button title='Submit' onPress={handleSubmitButtonClick}/>
            </View>
        </View>
    );
}

export default SearchModal;