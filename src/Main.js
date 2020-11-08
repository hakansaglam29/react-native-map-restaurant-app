import React from 'react';
import {SafeAreaView, View, FlatList, Text} from 'react-native';
import Axios from 'axios'

import {City,RestaurantDetail,SearchBar} from "./components";
import MapView from 'react-native-maps';





let originalList = [];

export default Main = (props) => {
    const [cityList, setcityList] = React.useState([]);
    const [restaurants, setRestaurants] = React.useState([]);


    // Burada {data} yerine response yazabilirdik. Response.data ile de cagirirdik.
    const fetchCities = async () => {
        const {data} = await Axios.get(
            "http://opentable.herokuapp.com/api/cities",
            );
            setcityList(data.cities);
            originalList = [...data.cities]
    }

    React.useEffect(() => {
            fetchCities();
        }, [])

    const renderItem = ({item}) => <City cityName={item} onSelect={() => onCitySelect(item)}/>;

    const onCitySelect = async (city) => {
        const {data: {restaurants: myRes}} = await Axios.get(
            "http://opentable.herokuapp.com/api/restaurants?city=" + city,
            );
            setRestaurants(myRes)
            console.log(myRes)
    }

    function onCitySearch(text){
        const filteredCityList = originalList.filter(item => {
            const userText = text.toUpperCase();
            const cityName = item.toUpperCase();
            return cityName.indexOf(userText) > -1;
        });
        setcityList(filteredCityList);
    }

    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}}>
                <MapView
                style={{flex:1}}
                initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                    }}>

                {restaurants.map((marker, index) => (
                    <MapView.Marker
                        key={index}
                        coordinate={{
                            latitude: marker.lat,
                            longitude: marker.lng,
                        }}
                    />))}

                </MapView>
                <View style={{position:'absolute'}}>
                    <SearchBar onSearch={onCitySearch}/>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator = {false}
                        data={cityList}
                        renderItem={renderItem}
                        keyExtractor={(_, index) => index.toString()}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}