import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { connect } from "react-redux";
import NavBar from '../components/NavBar';
import FooterNew from '../components/FooterNew';
import Constants from 'expo-constants';
import PersonalD from '../components/PersonalDates';


const ScreenDates = ({ navigation }) => {
    return (
        <View style={styles.contenedorPrincipal}>
        <NavBar navigation={navigation} />
        <ImageBackground
            source={require('../assets/consolidated_dot.png')}
            style={styles.background}>
            <View style={styles.content}>
                <View style={styles.contenedorPadre}>
                    <View>
                        <Text style={{ color: 'white', fontSize: 22, textAlign: 'center', marginTop: 20 }}>
                            My Dates
                        </Text>
                    </View>
                    <View style={{ marginHorizontal: 10, justifyContent: 'space-evenly' }}>
                        <Text style={{ color: 'black', fontSize: 18, marginTop: 20, backgroundColor: 'yellow', padding: 10, fontWeight: '700' }}>
                            Personal Information
                        </Text>
                        <PersonalD />
                    </View>
                </View>
                <FooterNew navigation={navigation} />
            </View>
        </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedorPrincipal: {
        width: "100%",
        height: "100%",
        paddingTop: Constants.statusBarHeight,
    },
    content: {
        width: "100%",
        height: "100%",
        paddingTop: Constants.statusBarHeight,
    },
    background: {
        flex: 1,
        width: '100%',
    },
    contenedorPadre: {
        width: '100%',
        height: '100%',
        flex: 1
    },
})

export default ScreenDates;