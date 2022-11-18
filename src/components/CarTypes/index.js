import React from 'react'
import { View, Text, Pressable } from 'react-native';
import CarTypesBox from '../CarTypesBox';
import styles from './styles';
import typesData from '../../assets/data/types';

//components--search results for UBEr 1.dummy map data 2. list of available cars 3.confirm ride button 

//to install the map we need to install react-native-maps



const CarTypes = () => {
        
    //confrim button logic function
    const Confirm = () => {
        console.warn('confirm')
    };

    return (
        <View>
            {typesData.map( type => (
                <CarTypesBox type={type}/> 
            ))}

            <Pressable onPress={ {Confirm} } style={{
                width: '100%',
                backgroundColor: 'black',
                padding: 10,
                margin: 10, 
                alignItems: 'center',
            }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}> COnfirm Taxi </Text>
            </Pressable>
            
        </View>
    );
};

export default CarTypes
