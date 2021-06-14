import React, {Component} from 'react';
import {Text, ScrollView, TouchableOpacity, View, StyleSheet, Alert} from 'react-native';
import { Button, Input } from 'react-native-elements'
import {Actions} from 'react-native-router-flux';
import SelectMultiple from 'react-native-select-multiple'

const hobbies = ['Концерты', 'Музеи', 'Выставки','Здравохранение', 'Строительство и реконструкция', 'Транспорт', 'Образование', 'Городское хозяйство', 'Благоустройство', 'Технологии', 'Культура', 'Экономика и предпринимательство', 'Экология', 'Безопасность', 'Социальная сфера', 'Наука и инновации', 'Спорт','Городское управление', 'Другое']

//Авторизация пользователя и опрос его предпочтений
class Authentication extends Component {
    state = {
        gender: 'female', //пол
        age: null,  //возраст
        hobbies: [], //увлечения
    }

    constructor() {
        super();
    }

    //при выборе нового увлечения
    onSelectionsChange = (hobbies) => {
        this.setState({ hobbies })
    }

    //вход в систему
    userSignup() {
        if (!this.state.gender || !this.state.age || !this.state.hobbies) return Alert.alert("Введите все данные, пожалуйста");
        fetch('http://192.168.1.65:3390/register', {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({
            gender: this.state.gender,
            age: this.state.age,
            hobbies: this.state.hobbies,
            }),
        })
        .then((response) => response.json())
        .then(() => {
            Actions.HomePage();
        })
        .done();
    }

    render() {
        return (
        <ScrollView style={styles.section}>
            <Text style={styles.title}>Пол</Text>
            <View style={{flexDirection: 'row'}}>
                <Button
                    titleStyle={this.state.gender === 'female' ? {color: "#FFFFFF"} : {color: "#BEBEBE"}}
                    style={this.state.gender === 'female' ? styles.btn_checked : styles.btn}
                    title="Женский"
                    onPress={() => { this.setState({ gender: 'female'});}} 
                    type='clear'
                />
                <Button
                    titleStyle={this.state.gender === 'male' ? {color: "#FFFFFF"} : {color: "#BEBEBE"}}
                    style={this.state.gender === 'male' ? styles.btn_checked : styles.btn}
                    title="Мужской" 
                    onPress={() => { this.setState({ gender: 'male'});}}
                    type='clear'
                />
            </View>
            <Text style={styles.title}>Возраст</Text>
            <Input
                style={styles.inputField}
                inputContainerStyle={{borderBottomWidth:0}}
                placeholder='Введите свой возраст...'
                keyboardType="numeric"
                value={this.state.age}
                onChangeText={(age) => this.setState({age})}
            />
            <Text style={styles.title}>Интересующие вас категории</Text>
            <SelectMultiple
                items={hobbies}
                selectedItems={this.state.hobbies}
                onSelectionsChange={this.onSelectionsChange} />
            <TouchableOpacity  onPress={this.userSignup.bind(this)}>
            <Button 
                style={styles.btn_apply}
                title="Применить"
                titleStyle={{color: "#FFFFFF"}}
                type="clear"
            />
            </TouchableOpacity>
        </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    section:{
        padding: 20
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        lineHeight: 34,
        letterSpacing: 0.36
    },
    btn: {
        backgroundColor: "#FFFFFF",
        width: 120,
        height: 35,
        borderRadius: 30,
    },
    btn_checked: {
        backgroundColor: "#C82220",
        width: 120,
        height: 35,
        borderRadius: 30
    },
    btn_apply: {
        backgroundColor: "#C82220",
        width: 120,
        height: 35,
        borderRadius: 30,
        marginBottom: 70,
        marginTop: 70,
        alignSelf: 'center'
    },
    inputField: {
        marginTop: 10,
        borderRadius: 30,
        backgroundColor: '#FFFDFE',
        width: 244,
        height: 50
    }
})

export default Authentication;