import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import { Icon } from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import  MapView  from 'react-native-maps'
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
                <MapView.Marker
                    coordinate={{latitude: 55.766598,
                    longitude: 37.627212}}
                    title={"Мир насекомых"}
                    description={"Ольга Городецкая научит изобразать узоры насекомых"}
                />
                <MapView.Marker
                    coordinate={{latitude: 55.7768419,
                    longitude: 37.639340}}
                    title={"История Москвы для детей и взрослых"}
                    description={"Узнайте история возникновения Кремля!"}
                />
                <MapView.Marker
                    coordinate={{latitude: 55.7507019,
                    longitude: 37.6223497}}
                    title={"Образ мира в фотографии"}
                    description={"Выставка Виктории Гуськовой"}
                />
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