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
            <Text>Ближайшие мероприятия</Text>
            <View>
                <ScrollView>
                    { this.state.data.map((el, i) => (
                        <View key= {i}>
                            <ImageBackground key= {i}
                                style={styles.tinyLogo}
                                source = {{ uri:  'https://www.mos.ru' +  el.image.small.src }}>
                                <View key={ i }>
                                    <Text style={styles.text}> {el.title} </Text>
                                    <Text style={styles.text}> {el.date} </Text>
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
        width: 100,
        height: 200,
    },
    text: {
        color: '#ffff',
    }
})

export default Recomendation;