
import React from "react";
import {View, Text } from 'react-native';
import styles from "./styles";




const CovidMessage = () => {
    return(
        <>
         <View style={styles.container}>
            <Text style={styles.title}>Travel Only on Necessity  </Text>
            < Text style={styles.text}> Due to covid bulshit we have created for reason other than to oppress people, wear your masks </Text>
            <Text style={styles.learnMore}> Learn NOT More...</Text>
        </View>
        </>
       
    );
}; 

export default CovidMessage; 