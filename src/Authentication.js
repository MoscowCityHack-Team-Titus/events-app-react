import React, {Component, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View, StyleSheet, Alert} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {Actions} from 'react-native-router-flux';
import SelectMultiple from 'react-native-select-multiple'

const hobbies = ['Образование', 'Концерты', 'Спектакли', 'Выставки', 'Кино', 'Игры']

class Authentication extends Component {
    state = {
        gender: 'female',
        age: null,
        hobbies: [],
    }

    constructor() {
        super();
    }

    onSelectionsChange = (hobbies) => {
        this.setState({ hobbies })
    }

    userSignup() {
        if (!this.state.gender || !this.state.age || !this.state.hobbies) return;
        // fetch('http://192.168.1.65:3390/', {
        //     method: 'POST',
        //     headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //     gender: this.state.gender,
        //     age: this.state.age,
        //     hobbies: this.state.hobbies,
        //     }),
        // })
        // .then(Alert.alert(JSON.stringify({gender: this.state.gender,age: this.state.age,hobbies: this.state.hobbies,})))
        // .then((response) => response.json())
        // .then((responseData) => {
        //     this.saveItem('id_token', responseData.id_token),
            Alert.alert( 'Signup Success!'),
            Actions.HomePage();
        // })
        // .done();
    }

    render() {
        return (
        <View >
            <Text > Welcome </Text>

            <View >
                <Text>Female</Text>
                <RadioButton
                    value='female'
                    status={ this.state.gender === 'female' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ gender: 'female'}); }}
                />
                <Text>Male</Text>
                <RadioButton
                    value='male'
                    status={ this.state.gender === 'male' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ gender: 'male'}); }}
                />
                <TextInput
                    editable={true}
                    onChangeText={(age) => this.setState({age})}
                    placeholder='Age'
                    keyboardType = 'numeric'
                    returnKeyType = 'next'
                    value={this.state.age}
                />
                <SelectMultiple
                    items={hobbies}
                    selectedItems={this.state.hobbies}
                    onSelectionsChange={this.onSelectionsChange} />

                <TouchableOpacity  onPress={this.userSignup.bind(this)}>
                    <Text> Продолжить </Text>
                </TouchableOpacity>
            </View>
        </View>
        );
    }
}

export default Authentication;