import React, {Component} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Label from './Label'
import Recomendation from './Recomendation';
import SearchBar from './SearchBar'

class HomePage extends Component {  


    render() {
        return (
            <>
            <Label></Label>
            <SearchBar></SearchBar>
            <Recomendation></Recomendation>
            </>
        );
    }   
}

export default HomePage;