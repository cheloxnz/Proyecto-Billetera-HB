import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { connect } from "react-redux";
import NavBar from '../components/NavBar';
import FooterNew from '../components/FooterNew';
import Constants from 'expo-constants';
import PersonalD from '../components/PersonalDates';


const ScreenDates = ({ navigation, onlineUser}) => {
    return (
        <View style={styles.contenedorPrincipal}>
        <NavBar navigation={navigation} />
        <ImageBackground
            source={require('../assets/consolidated_dot.png')}
            style={styles.background}>
            <View style={styles.content}>
                <View style={styles.contenedorPadre}>
                    <View style={{alignItems: 'center' }}>
                        <Text
                         style={{ color: 'black', fontSize: 20, marginTop: 10, backgroundColor: 'yellow', fontWeight: '700', textAlign: 'center', width:'60%' }}>
                            Personal Information
                        </Text>
                    </View>
                        <PersonalD dates = {onlineUser}/>
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
const mapStateToProps = state => {
    return {
        onlineUser: state.onlineUser
    }
}

export default connect (mapStateToProps)(ScreenDates);