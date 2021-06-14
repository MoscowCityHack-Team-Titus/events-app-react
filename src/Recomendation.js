import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, ImageBackground, TouchableOpacity, Alert } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Actions } from 'react-native-router-flux';


class Recomendation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
            id: 98016257,
            wishList: true,
            idEvent: null,
        };
    }

    componentDidMount() {
        fetch('http://192.168.1.65:3390/recommendations')
            .then((response) => response.json())
            .then((json) => this.setState({ data: json.items }))
            .catch((error) => console.error(error))
            .finally(() => this.setState({ isLoading: false }));
    }

    setLiked() {
        fetch('http://192.168.1.65:3390/wishlist', {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: this.state.id,
                wishList: this.state.wishList
            }),
        })
        .then(Alert.alert(JSON.stringify({id: this.state.id, wishList: this.state.wishList})))
        .then((response) => response.json())
        .then(() => {
            Alert.alert('Liked!')
        })
        .done();
    }

    render () {
        return (
            <>
            <Text style={styles.title}>Рекомендуемые мероприятия</Text>
            <View>
                <ScrollView horizontal={true}>
                    { this.state.data.map((el, i) => (
                        <View key= {i}>
                            <TouchableOpacity key={i} onPress={() => Actions.EventPage({idEvent: el.id})}>
                            <ImageBackground key={i}
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
                                    <Text>{el.spheres[0].title}</Text>
                                </View>
                                <View style={styles.about} key={ i }>
                                    <Text style={styles.titleEvent}> {el.title} </Text>
                                    <Text style={styles.date}> {el.date} </Text>
                                    <Text style={styles.location}> YOTA ARENA </Text>
                                </View>
                            </ImageBackground>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
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
        width: 100
    }
})

export default Recomendation;