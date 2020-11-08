import { StyleSheet, Dimensions } from 'react-native';

export const searchBarStyle = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 10,
        width: Dimensions.get('window').width * 0.9,
        top: 5,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        padding: 5

    }
});


export const cityStyle = StyleSheet.create({
    container: {
        padding: 5,
        margin: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
        color: '#424242'
    }
});


export const detail = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    },
    containertwo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#424242',
    },

    adress: {
        fontSize: 12,
    },

    phone: {
        fontWeight: 'bold',
        marginLeft: 5,
    },
    icon: {
        flexDirection: 'row',
    },
    modal: {
        justifyContent: 'flex-end',
        margin:0,
        marginHorizontal: 10,
    },
});