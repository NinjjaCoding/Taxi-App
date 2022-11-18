import React from "react";
import { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapView from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import MapViewDirections from "react-native-maps-directions";

//this screen is while on route to destination...so we need to get mapViewDirection installed and impoirted and take the code from docs

const GOOGLE_MAPS_APIKEY ='AIzaSyDBTvkzd-E6eppmfsUc98EqiFiySr6g_ec'; 

const RoutingMap = () => {

    const origin ={
        latitude: 28.46062,
        longitude: -16.263045
    }; 


    const destination = {
        latitude: 28.450127,
        longitude: -16.269045,
    }

    return(
            
        <MapView //MISSING API KEY THAT IS WHY GOOGLE MAPS IS NOT WORKING
            style={{width: '100%', height: '100%'}}
            provider={PROVIDER_GOOGLE}
       
       initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}> 
            <MapViewDirections 
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor='green'
                />
                <Marker coordinate={origin}
                        title={'Origin'}
                />
                <Marker  coordinate={destination}
                        title={'destination'}
                        />

         
        </MapView> 
    );
};

export default RoutingMap; 