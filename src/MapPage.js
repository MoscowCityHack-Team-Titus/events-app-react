import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import { Icon } from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import  MapView  from 'react-native-maps'
import Label from './Label'
import SearchNavBar from './SearchNavBar';

class MapPage extends Component {  
    constructor() {
        super();
    }

    render() {
        return (
            <>
            <MapView 
                style={styles.map}
                loadingEnabled={true}
                region={{
                    latitude: 55.74027,
                    longitude: 37.6736,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121
                }}>
                    <View style={styles.view}>
                <Icon style={styles.icon}
                    reverse
                    name="map"
                    type="simple-line-icon"
                    color='#C82220'
                    onPress={() => Actions.HomePage()}
                />
                <SearchNavBar/>
                <Icon style={styles.icon}
                    raised
                    name='heart'
                    type='simple-line-icon'
                    color='#BEBEBE'
                    onPress={() => Actions.Favourites()}
                />
                </View>
            </MapView>
            </>
        );
    }   
}

const styles = StyleSheet.create({
    button: {
        width: 37,
        height: 37,
        left: 21,
        borderRadius: 50,
        shadowColor: 'rgba(178, 178, 178, 0.25)',
        shadowOffset: { top: 0, left: 4, bottom: 10},
        backgroundColor: '#FFFDFE'
    },
    icon: {
        width:30,
        height:30
    },
    view: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    map: {
        width: '100%',
        height: '100%',
    }
})


export default MapPage;