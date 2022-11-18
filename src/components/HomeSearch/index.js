import React from 'react';
import {View, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';


//components: 1. input box 2. previous destination 3. Home Destination 

const HomeSearch = () => {
    return(
        <View>
            {/**Input Box --whereTo box*/}
            <View style={styles.inputBox}>

                <Text style={styles.inputText}> Where To Go?  </Text>

                <View style={styles.timeContainer}>
                    <AntDesign name={'clockcircle'} size={26} />
                    <Text> Now </Text>
                    <MaterialIcons name={'arrow-downward'} size={26} />

                </View>
            </View>

            {/** Previous trip bar button */}
            <View style={styles.iconContainer}>
                {/**to change style from parent we need to put the changes in an array [] inside the styles desired  */}
                <View style={[styles.icon, {backgroundColor: '#218cff'}]}>
                    <Entypo name='home' size={20} color={'black'} />
                </View>
                <Text style={styles.prevDestination}> Let's Go Home ! </Text>
            </View>

            {/**Home destination bar button */}
                <Text> Hi..im from HomeSearch screen  </Text>
        </View>
    );
};

export default HomeSearch; 