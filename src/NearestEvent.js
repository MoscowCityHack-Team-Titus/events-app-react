import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, ImageBackground } from 'react-native'


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
            <Text style={styles.title}>Ближайшие мероприятия</Text>
            <View>
                <ScrollView>
                    { this.state.data.map((el, i) => (
                        <View key= {i} style={styles.block}>
                            <View style={styles.date}>
                                <Text style={styles.dateText}>
                                    <Text style={{textAlign: "center"}}>11</Text> июня 22:00
                                </Text>
                            </View>
                            <ImageBackground key= {i}
                                style={styles.tinyLogo}
                                source = {{ uri:  'https://www.mos.ru' +  el.image.small.src }}>
                            </ImageBackground>
                            <View>
                                <Text style={styles.text}> {el.title} </Text>
                                <Text style={styles.location}>Главclub</Text>
                                <View style={styles.type}> 
                                    <Text style={{color: '#ffffff'}}>Концерты</Text> 
                                </View>
                            </View>
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
        width: 94,
    },
    text: {
        fontSize: 13,
        fontWeight: "500",
        lineHeight: 13,
        letterSpacing: -0.015,
    },
    title: {
        fontSize: 26,
        fontWeight: "500",
        lineHeight: 26,
        letterSpacing: -0.015,
    },
    block: {
        borderRadius: 10,
        backgroundColor: "#FFFDFE",
        height: 96,
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 5
    },
    date: {
        backgroundColor: "#C82220",
        width: 55
    },
    dateText: {
        fontSize: 18,
        fontWeight: "500",
        lineHeight: 18,
        letterSpacing: -0.015,
        color: "#ffffff",
        marginLeft: 5
    },
    location: {
        fontSize: 18,
        fontWeight: "300",
        lineHeight: 18,
        letterSpacing: -0.015,
    },
    type: {
        margin: 10,
        backgroundColor: "#000000",
        borderRadius: 30,
        height: 16,
        width: 68 
    }
})

export default Recomendation;