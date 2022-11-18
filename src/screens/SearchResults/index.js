import React from 'react'
import { View, Dimensions } from 'react-native';
import CarTypes from '../../components/CarTypes';
import HomeMap from '../../components/HomeMap';
import RoutingMap from '../../components/RoutingMap';


const SearchResults = () => {
    return (
        <View style={{display: 'flex', justifyContent: 'space-between'}}>

            <View style={{height: Dimensions.get('window').height - 400 }}>

                 {/* <HomeMap /> */}
                 <RoutingMap/>
            </View>
           

            <View style={{height: 500,}}/>
            <CarTypes /> 
        </View>
    );
};

export default SearchResults;
