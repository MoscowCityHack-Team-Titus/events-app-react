import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';
import { SearchBar, Input } from 'react-native-elements'
import { Icon } from 'react-native-elements';

class SearchNavBar extends Component {

    state = {
        searchParams: '',
    }

    constructor() {
        super();
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
                />
            </View>
            // <TextInput style={styles.search}
            //     value={this.state.searchParams}
            //     placeholder='Концерты, Стендапы'
            //     onChangeText={searchParams => this.setState({searchParams})}>
            //         <Icon style={styles.icon}
            //             raised
            //             name="map"
            //             type="simple-line-icon"
            //             color='#BEBEBE'
            //             onPress={() => Actions.MapPage()}
            //         />
            // </TextInput>
        );
    }
}

const styles = StyleSheet.create({
    search: {
        marginTop: 10,
        borderRadius: 30,
        // shadowColor: 'rgba(178, 178, 178, 0.25)',
        // shadowOffset: { top: 0, left: 4, bottom: 10},
        backgroundColor: '#FFFDFE',
        width: 244,
        height: 50
    }
})

export default SearchNavBar;