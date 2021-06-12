import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'

class Label extends Component {

    render() {
        return(
            <Text style={styles.text}>Моя Москва</Text>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 26,
        fontWeight: "500",
        lineHeight: 26,
        letterSpacing: -0.015,
        color: '#C82220'
    }
})

export default Label;