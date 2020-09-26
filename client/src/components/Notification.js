import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import { theme } from '../core/theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const Notification = ({ children }) => <Text><FontAwesome name={'user'} style={styles.imageBell} size={35} /></Text>
const styles = StyleSheet.create({
    imageBell: {
        width: "26%",
        height: "80%",
        paddingLeft: "40%",
    },
});



export default (Notification);
