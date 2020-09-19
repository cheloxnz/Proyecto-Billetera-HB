import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import { theme } from '../core/theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const Notification = ({ children }) => <FontAwesome name={'bell'} style={styles.imageBell} size={35}/>
const styles = StyleSheet.create({
    imageBell: {
        width: "26%",
        height: "80%",
        paddingLeft: "40%",
    },
});



export default (Notification);
