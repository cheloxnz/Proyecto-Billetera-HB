import React from 'react';
import { StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const Card = ({ children }) => <FontAwesome name={'credit-card'} style={styles.imageCard} size={35}/>
const styles = StyleSheet.create({
    imageCard: {
        width: "60%",
        height: "100%",
    },
});



export default (Card);