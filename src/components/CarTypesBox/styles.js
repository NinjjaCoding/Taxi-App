
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    image: {
        height: 70,
        width: 80,
        resizeMode: 'contain',
    },
    middleContainer: {
        flex: 1,
        marginHorizontal: 10,
        marginBottom: 5,
    }, 
    type: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
    },
    rightContainer: {
        width: 100,
        alignItems: 'center',
        flexDirection: 'row',
    },
    time: {
        color: 'black',
        fontWeight: 'bold',

    },
    price: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
        marginLeft: 5,
    },
    
});

export default styles;