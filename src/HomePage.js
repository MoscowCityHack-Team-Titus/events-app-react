import React, {Component} from 'react';
import {Alert, Button, Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Label from './Label'
import Recomendation from './Recomendation';
import SearchBar from './SearchBar'
import Popular from './Popular'
import NearestEvent from './NearestEvent'

class HomePage extends Component {  


    render() {
        return (
            <>
            <Label/>
            <Button
                title="Map"
                onPress={() => Actions.MapPage()}
            />
            <SearchBar/>
            <Button
                title="Favourites"
                onPress={() => Actions.Favourites()}
            />
            <ScrollView>
                <Recomendation/>
                <Popular/>
                <NearestEvent/>
            </ScrollView>
            </>
        );
    }   
}

export default HomePage;