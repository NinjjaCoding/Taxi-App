import React from "react";
import {FlatList, Image, Text, View } from 'react-native';
import { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapView from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { types } from "@babel/core";
import cars from '../../assets/data/cars'

//in order to install google maps we need the API key plust installation and markers to show the cars on map

//to get the types of taxi chosen and likewise similar car class icon should be shown so we access the picst in our data


const HomeMap = () => {

  const getImage =(type) => {
    if (type === 'UberX') {
      return require('../../assets/images/top-UberX.png');
    }
    if ( type === 'Comfort') {
      return require('../../assets/images/top-Comfort.png')
    }
    return require('../../assets/images/top-UberXL.png')
  }
    return(
      < View style={{height: 300, backgroundColor: 'red',
               justifyContent: 'center', alignItems: 'center'}}
               > 
            
        <MapView //MISSING API KEY THAT IS WHY GOOGLE MAPS IS NOT WORKING
            style={{width: '100%', height: '100%'}}
            provider={PROVIDER_GOOGLE}
       
       initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}> 
        {cars.map((car) => (
            <Marker 
              key={car.id}
              coordinate={{latitude: car.latitude, longitude: car.longitude 
              }}
              > 
              <Image style={{width: 70, height: 70, resizeMode: 'contain'}} 
                      source={getImage(car.type)}
              />
            </Marker>
          ))}
                  {/**so instead of using fixed lat n long we use dummy data to represent markers which represnet the cars as a flatList on the map */}
                  {/* <FlatList data={cars} renderItem={({item}) => ()} />  this was not a good idea since it did not display items correctly so we moved to map each*/}        
        </MapView>
      </View>  
    );
};

export default HomeMap; 