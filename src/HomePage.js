import React, {Component} from 'react';
import {Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Icon } from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import Recomendation from './Recomendation';
import SearchNavBar from './SearchNavBar'
import Popular from './Popular'
import NearestEvent from './NearestEvent'

class HomePage extends Component {  


    render() {
        return (
            <>
            <View style={styles.view}>
                <Icon style={styles.icon}
                    raised
                    name="map"
                    type="simple-line-icon"
                    color='#BEBEBE'
                    onPress={() => Actions.MapPage()}
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
            <ScrollView>
                <Recomendation/>
                <Popular/>
                <NearestEvent/>
            </ScrollView>
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
    }
})

export default HomePage;