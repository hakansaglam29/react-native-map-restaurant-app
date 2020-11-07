import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {searchBarStyle} from '../Style'

const SearchBar = () => {
    return(
        <View style={searchBarStyle.container}>
            <Icon name='magnify' size={20} color='gray'/>
            <TextInput
            placeholder='Search a city'
            style={searchBarStyle.input}
            
            />
        </View>
    )
}

export {SearchBar};