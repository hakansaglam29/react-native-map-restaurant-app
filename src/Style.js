import {StyleSheet, Dimensions} from 'react-native';

export const searchBarStyle = StyleSheet.create({
    container:{
        backgroundColor:'white',
        padding:5,
        borderRadius:10,
        width: Dimensions.get('window').width * 0.9,
        top:5,
        alignSelf:'center',
        flexDirection:'row',
        alignItems:'center',
    },
    input: {
        padding:5

    }
});


export const cityStyle = StyleSheet.create({
    container:{
        padding:5,
        margin:10,
        borderRadius:10,
        backgroundColor:'white',
        borderWidth:1,
        borderColor: '#e0e0e0'
    },
    text: {

    }
});


export const RestaurantDetail = StyleSheet.create({
    container:{

    },
    name: {

    },

    adress: {

    },

    phone: {

    }
});