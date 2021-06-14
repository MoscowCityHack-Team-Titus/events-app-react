import React, {Component} from 'react';
import { Alert, ImageBackground, ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import SearchNavBar from './SearchNavBar'

class SearchPage extends Component { 
    
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: false,
            id: null,
            wishList: false,
        };
    }

    componentDidMount() {
        fetch(`https://www.mos.ru/api/newsfeed/v4/frontend/json/ru/afisha?fields=id,title,label,image,date_from,date_to,date,kind&filter=%7B%22title%22:%22%25${encodeURIComponent(this.props.text)}%25%22%7D`)
            .then((response) => response.json())
            .then((json) => this.setState({ data: json.items }))
            .catch((error) => console.error(error))
            .finally(() => this.setState({ isLoading: true }));
    }

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
                <>
                <View>
                <Text style={styles.title}>Найдено {this.state.data.length} мероприятий</Text>
                    <ScrollView>
                        { this.state.isLoading && this.state.data.map((el, i) =>
                        <>
                            <View key={i} style={styles.container}>
                                <TouchableOpacity key={i}>
                                    <ImageBackground key= {i}
                                        style={styles.tinyLogo}
                                        source = {{ uri:  'https://www.mos.ru' +  el.image.small.src }}>
                                        <LinearGradient colors={['rgba(0,0,0,0.0)', 'rgba(0,0,0,0.8)']}
                                        style={{
                                            position: 'absolute',
                                            left: 0,
                                            right: 0,
                                            top: 0,
                                            height: '100%'
                                        }}/>
                                        <View style={styles.type}>
                                            <Text>Концерты</Text>
                                        </View>
                                        <View style={styles.about} key={ i }>
                                            <Text style={styles.titleEvent}> {el.title} </Text>
                                            <Text style={styles.date}> {el.date} </Text>
                                            <Text style={styles.location}> YOTA ARENA </Text>
                                        </View>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                            </>
                        )}
                    </ScrollView>
                </View>
                </>
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
    },
    tinyLogo: {
        overflow: 'hidden',
        marginLeft: 20,
        width: 180,
        height: 250,
        borderRadius: 10
    },
    text: {
        color: '#ffff',
    },
    title: {
        fontSize: 26,
        fontWeight: "500",
        lineHeight: 26,
        letterSpacing: -0.015,
    },
    about: {
        margin: 10,
        height: 200,
        justifyContent: 'flex-end'
    },
    titleEvent: {
        fontSize: 18,
        fontWeight: "500",
        lineHeight: 18,
        letterSpacing: -0.015,
        color: "#ffffff",
        marginBottom: 7
    },
    date: {
        fontSize: 14,
        fontWeight: "300",
        lineHeight: 14,
        letterSpacing: -0.015,
        color: "#ffffff"
    },
    location: {
        fontSize: 18,
        fontWeight: "300",
        lineHeight: 18,
        letterSpacing: -0.015,
        color: 'rgba(255, 255, 255, 0.6)'
    },
    type: {
        margin: 10,
        backgroundColor: "#FFFDFE",
        borderRadius: 30,
        height: 16,
        width: 68
    }
})


export default SearchPage;