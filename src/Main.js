import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {City,RestaurantDetail,SearchBar} from "./components";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default Main = () => {
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}}>
                <Text> Main Component</Text>
                <Icon name="access-point" size={30} color="#900" />
                <SearchBar/>
                <City/>
                <RestaurantDetail/>
            </View>
        </SafeAreaView>
    )
}