import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';
import { Input, Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';

class SearchNavBar extends Component {


    constructor() {
        super();
        this.state = {
            text: ''
        }
    }

    
    render () {
        return (
            <View style={styles.search}>
                <Input
                    inputContainerStyle={{borderBottomWidth:0}}
                    placeholder='Концерты, Стендапы'
                    leftIcon={
                        <Icon
                            type= 'simple-line-icon'
                            name= 'magnifier'
                            color="#BEBEBE"
                        />
                    }
                    rightIcon={
                        <Icon
                            type= 'simple-line-icon'
                            name= 'options'
                            color="#BEBEBE"
                        />
                    }
                    value={this.state.text}
                    onChangeText={(text) => this.setState({text})}
                    onSubmitEditing={() => Actions.SearchPage({text: this.state.text})}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    search: {
        marginTop: 10,
        borderRadius: 30,
        backgroundColor: '#FFFDFE',
        width: 244,
        height: 50
    }
})

export default SearchNavBar;