import React from 'react'
import { View, Text, Image } from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

//component has 3 parts: 1.taxi/uber car image 2.middle text part 3. price 


const CarTypesBox = (props) => {
    
    const { type } = props;

    const getImage = () => {
    if (type.type === 'UberX' ) {
        return require('../../assets/images/UberX.jpeg')
    }
    if (type.type === 'Comfort') {
        return require ('../../assets/images/Comfort.jpeg')
    }
    if (type.type === 'UberXL') {
        return require ('../../assets/images/UberXL.jpeg')
    }


}
    return (
        <View style={styles.container}>
                {/** Image icons on left side of the box */}
            <Image style={styles.image} 
               // source={require('../../assets/images/UberX.jpeg')}/> 
                source={getImage()}/> 


                {/** drop off time and cartype container */}
            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                    {type.type} {' '}
                    <Ionicons name={'person'} size={16} /> 
                </Text>
                    <Text style={styles.time}> 8:05PM DropOff </Text>
 
            </View>

                {/** estimated price and price tag */}
                <View style={styles.rightContainer}> 
                       <Ionicons name={'pricetag'} size={18} color={'orange'} /> 
                        <Text style={styles.price}> $ {type.price} </Text>
                </View> 
        </View>
    );
};

export default CarTypesBox;
