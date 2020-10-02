import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/Entypo'


const Notification = ({ children }) => <Text><FontAwesome name="log-out" style={styles.imageBell} size={33} /></Text>
const styles = StyleSheet.create({
    imageBell: {
        marginRight: 10
    },
});



export default (Notification);
