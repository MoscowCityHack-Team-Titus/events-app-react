import React, {Component} from 'react';
import {Alert, Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import  MapView  from 'react-native-maps'
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
            <MapView 
                style={styles.map}
                loadingEnabled={true}
                region={{
                    latitude: 55.74027,
                    longitude: 37.6736,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121
                }}>

            </MapView>
            {/* <Map
                google = {this.props.google}
                // zoom = {15}
                // style = {styles.map}
                // initialCenter={{ lat: 9.761927, lng: 79.95244 }}
            /> */}
            </>
        );
    }   
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    }
})


export default MapPage;