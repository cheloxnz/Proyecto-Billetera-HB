import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const FooterNew = ({ navigation }) => {


    return (
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}  >
                <View style={styles.icons}>
                    <FontAwesome name={'home'} size={30} style={{ color: 'white' }} />
                    <Text style={styles.text}>Home</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Transfers')}>
                <View style={styles.icons}>
                    <FontAwesome name={'random'} size={30} style={{ color: 'white' }} />
                    <Text style={styles.text}>Transfers</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Card')} >
                <View style={styles.icons}>
                    <FontAwesome name={'credit-card'} size={30} style={{ color: 'white' }} />
                    <Text style={styles.text}>Card</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Payments')}>
                <View style={styles.icons}>
                    <FontAwesome name={'dollar'} size={30} style={{ color: 'white' }} />
                    <Text style={styles.text}>Payments</Text>
                </View>
            </TouchableOpacity>


        </View>
    );
};


const styles = StyleSheet.create({
    footer: {
        width: "100%",
        height: '8%',
        backgroundColor: 'black',
        borderTopColor: 'yellow',
        borderTopWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 3,
        borderTopColor: "black",
        borderStyle: 'solid',
    },
    icons: {
        height: '100%',
        borderRadius: 10,
        alignItems: 'center',
        color: 'white',
        justifyContent: 'center'
    },
    text: {
        position: 'relative',
        color: 'white',
    }
})


export default FooterNew;
