import React from 'react';
import { StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const HomePos = ({ children }) => <FontAwesome name={'home'} style={styles.imageHome} size={35}/>
const styles = StyleSheet.create({
    imageHome: {
        width: "35%",
        height: "100%",
    },
});



export default (HomePos);