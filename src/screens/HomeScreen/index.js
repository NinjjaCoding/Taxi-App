import React from "react";
import { View, Dimensions } from "react-native";
import CovidMessage from "../../components/CovidMessage";
import HomeMap from "../../components/HomeMap";
import HomeSearch from "../../components/HomeSearch";


//home screen consist of (compoenent sections) 1. map component 2.message box 3. where to? component 4. 

const HomeScreen = () => {
    return(
        <View style={{height: Dimensions.get('window').height - 400 }}>
            {/** Map component */}
             <HomeMap/>

             {/** covid message box */}
        <CovidMessage/>

        {/** where to go? component */}
        <HomeSearch/>


        </View>
        
       
    );
};

export default HomeScreen;