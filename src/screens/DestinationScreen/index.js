import React, { useEffect } from "react";
import {View, TextInput, SafeAreaView } from 'react-native';
import { useState } from "react";
import styles from "./styles.js";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const DestinationScreen = () => {
    //NOW to record the textInput box value--and send to google api etc..we need to create to state variables from and to state useState
    const [ fromText, setFromText] = useState({initialState: null});
     const [destinationPlace, setDestinationPlace] = useState({initialState: null}); 
     //now change the vlaue and onChangeText of the textINput boxes
    //to get the autocomplete done we need to install npm insall react-native-google-places-autocomplete
    //then get the api from a developer google account and created google places API key to paste on project
    //once google api was installed then we changed the variables above to variable below--change onPress too
   


   useEffect(() => {
     console.warn({data: 'use effect was used '});
     if (fromText, destinationPlace) {
       console.warn({data: 'redirect is pressed'})
     }
   }, [fromText, destinationPlace])

    return(
        <SafeAreaView>
            <View style={styles.container}>
                <TextInput style={styles.textInput} 
                        placeholder='From'
                        value={fromText}
                        onTextChange={setFromText}
            /> 

{/* <GooglePlacesAutocomplete
      placeholder='Where to ? '
      onPress={(data, details = null) => {
          setDestinationPlace({value, details});
       
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      styles={{ //this comes from google style sheet on google  
          textInput: styles.textInput,
      }}
      fetchDetails
      query={{
        key: 'AIzaSyB1KoK7KQe0YzwScTNjC7lHRSi7my056bk',
        language: 'en',
      }}
    /> */}
          

<GooglePlacesAutocomplete
      placeholder='Where to ? '
      onPress={(data, details = null) => {
          setDestinationPlace({value, details});
       
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      styles={{ //this comes from google style sheet on google  
          textInput: styles.textInput,
      }}
      fetchDetails
      query={{
        key: 'AIzaSyB1KoK7KQe0YzwScTNjC7lHRSi7my056bk',
        language: 'en',
      }}
    />


        </View>
        </SafeAreaView>
        
    );
};

export default DestinationScreen;