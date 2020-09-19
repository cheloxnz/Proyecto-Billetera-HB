import React from 'react';
import { StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const Transfer = ({ children }) => <FontAwesome name={'random'} style={styles.imageTransf} size={35}/>
const styles = StyleSheet.create({
    imageTransf: {
        width: "35%",
        height: "100%",
    },
});



export default (Transfer);