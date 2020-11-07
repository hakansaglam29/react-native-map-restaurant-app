import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {cityStyle} from '../Style';

const City = (props) => {
    return(
        <TouchableOpacity style={cityStyle.container}>
            <Text style={cityStyle.text}> {props.cityName}</Text>
        </TouchableOpacity>
    )
}

export {City};