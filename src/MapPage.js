import React, {Component} from 'react';
import {Alert, Button, Image, Text, TouchableOpacity, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import SearchBar from './SearchBar';

class MapPage extends Component {  
    constructor() {
        super();
    }

    render() {
        return (
            <>
            <Button marginTop='50px'
                title="Back"
                onPress={() => Actions.HomePage()}
            />
            <SearchBar/>
            <Button
                title="Favourites"
                onPress={() => Actions.Favourites()}
            />
            </>
        );
    }   
}

export default MapPage;