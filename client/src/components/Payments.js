import React from 'react';
import { StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const Payments = ({ children }) => <FontAwesome name={'dollar'} style={styles.imageCard} size={35}/>
const styles = StyleSheet.create({
    imageCard: {
        width: "42%",
        height: "100%",
    },
});



export default (Payments);