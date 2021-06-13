import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';


class Recomendation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true
        };
    }

    componentDidMount() {
        fetch('https://www.mos.ru/api/newsfeed/v4/frontend/json/ru/afisha?expand=spheres&fields=id,title,label,image,date_from,date_to,kind,free&filter=%7B%22%3C%3Doccurrences.date_from%22:%222021-06-27+23:59:59%22,%22%3E%3Doccurrences.date_from%22:%222021-05-27+00:00:00%22%7D&per-page=9&sort=occurrences.date_to,-occurrences.date_from')
            .then((response) => response.json())
            .then((json) => this.setState({ data: json.items }))
            .catch((error) => console.error(error))
            .finally(() => this.setState({ isLoading: false }));
    }

    render () {
        return (
            <>
            <Text style={styles.title}>Возможно вас заинтересует</Text>
            <View>
                <ScrollView horizontal={true}>
                    { this.state.data.map((el, i) => (
                        <View key= {i}>
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
                                    <Text style={styles.date}> 14 июня 20:00 </Text>
                                    <Text style={styles.location}> YOTA ARENA </Text>
                                </View>
                            </ImageBackground>
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
        width: 68
    }
})

export default Recomendation;