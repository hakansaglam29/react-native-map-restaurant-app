import React from 'react';
import { View, Text } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { detail } from '../Style';

const RestaurantDetail = (props) => {

    function showPrice(dolar) {
        const priceLabel = []
        for (let i = 0; i < dolar; i++) {
            priceLabel.push(<Icon key={i} name="currency-usd" size={20} color="#33691e" />)
        }
        return priceLabel
    }
    return (
        <Modal
            isVisible={props.isVisible}
            style={detail.modal}
            onBackdropPress={props.onBackdropPress}
            swipeDirection='down'
            onSwipeComplete={props.onSwipeComplete}
        >
            <View style={detail.container}>
                <Text style={detail.name}>{props.restaurant.name}</Text>
                <Text style={detail.address}>
                    {props.restaurant.area} {props.restaurant.address}
                </Text>
                <View
                    style={detail.containertwo}>
                    <View style={detail.icon}>
                        <Icon name='phone' size={20} />
                        <Text style={detail.phone}>+{props.restaurant.phone}</Text>
                    </View>
                    <View style={detail.icon}>
                        {showPrice(props.restaurant.price)}
                    </View>
                </View>
                <Text>
                    lpsum dolar sit amet, consectorem ietur adipiscing. Integer in lpsum dolar sit amet, consectorem ietur adipiscing. Integer in lpsum dolar sit amet, consectorem ietur adipiscing. Integer inlpsum dolar sit amet, consectorem ietur adipiscing. Integer in lpsum dolar sit amet, consectorem ietur adipiscing. Integer inlpsum dolar sit amet, consectorem ietur adipiscing. Integer inlpsum dolar sit amet, consectorem ietur adipiscing. Integer inlpsum dolar sit amet, consectorem ietur adipiscing. Integer in
                    </Text>
            </View>
        </Modal>
    )
}

export { RestaurantDetail };