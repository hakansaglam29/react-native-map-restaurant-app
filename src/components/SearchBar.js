import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {searchBarStyle} from '../Style'

const SearchBar = (props) => {
    return(
        <View style={searchBarStyle.container}>
            <Icon name='magnify' size={20} color='gray'/>
            <TextInput
            placeholder='Search a city'
            style={searchBarStyle.input}
            onChangeText={text => props.onSearch(text)}
            
            />
        </View>
    )
}

export {SearchBar};