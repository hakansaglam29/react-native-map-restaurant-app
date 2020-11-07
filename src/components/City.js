import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {cityStyle} from '../Style';

const City = (props) => {
    return(
        <TouchableOpacity style={cityStyle.container}>
            <Icon name='city' size={20} color='#424242'/>
            <Text style={cityStyle.text}> {props.cityName}</Text>
        </TouchableOpacity>
    )
}

export {City};