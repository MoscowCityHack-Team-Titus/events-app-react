import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, ImageBackground, TouchableOpacity, Alert } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';
import HTML from 'react-native-render-html'


class EventPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
            id: this.props.idEvent,
            wishList: true,
            styledWishList: 'none'
        };
    }

    componentDidMount() {
        fetch(`https://www.mos.ru/api/newsfeed/v4/frontend/json/ru/afisha?&filter=%7B%22id%22:%22${encodeURIComponent(this.props.idEvent)}%22%7D`)
            .then((response) => response.json())
            .then((json) => this.setState({ data: json.items[0] }))
            .catch((error) => console.error(error))
            .finally(() => this.setState({ isLoading: false }))
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
        .then((response) => response.json())
        .done();
        this.setState({styledWishList: 'flex'})
    }

    render () {
        return (
            <>
            <View>
                <ScrollView>
                        <View>
                            <ImageBackground
                                style={styles.tinyLogo}
                                source = {{ uri:  'https://www.mos.ru' +  this.state.data.image?.small.src }}>
                                <LinearGradient colors={['rgba(0,0,0,0.0)', 'rgba(0,0,0,0.8)']}
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    top: 0,
                                    height: '100%'
                                }}/>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <View style={styles.type}>
                                        <Text>Концерты</Text>
                                    </View>
                                    <Icon
                                        style={{display: this.state.styledWishList}}
                                        reverse
                                        type= 'simple-line-icon'
                                        name= 'heart'
                                        color="#C82220"
                                    />
                                    </View>
                                <View style={styles.about} >
                                    <Text style={styles.titleEvent}> {this.state.data.title} </Text>
                                    <Text style={styles.date}> {this.state.data.date} </Text>
                                    <Text style={styles.location}> YOTA ARENA </Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View>
                        </View>
                        <View>
                            <Text style={styles.title}>О мероприятии</Text>
                            <HTML html={this.state.data.text}/>
                            <Text style={styles.title}>Стоимость</Text>
                            <Text>Цена билета от 900 рублей. Уточняйте стоимость и места продажи билетов на официальном сайте</Text>
                            <Text style={styles.title}>Место проведения</Text>
                            <Text>YOTA ARENA</Text>
                        </View>
                        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <Icon
                            reverse
                            type= 'simple-line-icon'
                            name= 'paper-plane'
                            color="#6E69DD"
                        />
                        <Icon
                            reverse
                            type= 'simple-line-icon'
                            name= 'bubbles'
                            color="#1FE378"
                        />
                        <Icon
                            reverse
                            type= 'simple-line-icon'
                            name= 'envelope-letter'
                            color="#25BFE0"
                        />
                        <TouchableOpacity onPress={
                                    this.setLiked.bind(this)
                                }>
                        <Icon
                            reverse
                            type= 'simple-line-icon'
                            name= 'heart'
                            color="#C82220"
                        />
                        </TouchableOpacity>
                        </View>
                </ScrollView>
            </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    tinyLogo: {
        overflow: 'hidden',
        width: '100%',
        height: 375,
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
        height: 300,
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

export default EventPage;