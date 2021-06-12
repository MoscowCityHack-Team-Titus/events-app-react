import React, { Component } from 'react'
import { TextInput } from 'react-native-paper'

class SearchBar extends Component {

    state = {
        searchParams: null,
    }

    constructor() {
        super();
    }
    
    render () {
        return (
            <TextInput
                editable={true}
                label='Search'
                value={this.state.searchParams}
                placeholder='Концерты, Стендапы'
                onChangeText={searchParams => this.setState({searchParams})}
            />
        );
    }
}

export default SearchBar;