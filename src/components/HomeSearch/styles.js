import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: '#o7o7o7',
        padding: 5,
        margin: 5, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,


    },
    inputText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#6e6e6e'

    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 50,
    },
    iconContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#b3b3b3' ,
        backgroundColor: '#F2F2F2',
        borderTopWidth: 1,
        borderTopColor: '#b3b3b3'
    },
    icon: {
        backgroundColor: '#b3b3b3',
        padding: 10,
        borderRadius: 25,
    },
    prevDestination: {
        marginLeft: 10,
        fontWeight: '500',
        fontSize: 16,

    },
});

export default styles;