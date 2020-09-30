import React from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import FooterNew from '../components/FooterNew';
import NavBar from '../components/NavBar';
import SearchP from '../components/SearchP';
import ListH from '../components/ListHorizontal';
import ListPayment from '../components/ListPayments';

const MyCard = ({ navigation }) => {
    return (
        <View style={styles.contenedorCard}>

            <NavBar navigation={navigation} />
            <ImageBackground
                source={require('../assets/consolidated_dot.png')}
                style={styles.background}
            >
                <View style={styles.contenedorSegundo}>
                    <View style={{ marginTop: 14 }}>
                        <ListH navigation= {navigation} />
                    </View>
                    <View style={styles.contenedorRecargas}>
                        <View style={{ marginTop: 10 }}>
                            <ListPayment />
                        </View>
                    </View>
                </View>
            </ImageBackground>

            <FooterNew navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
    },
    contenedorCard: {
        width: "100%",
        height: "100%",
        paddingTop: Constants.statusBarHeight,
    },
    contenedorSegundo: {
        width: '100%',
        height: '88%',
    },
    contenedorInfoP: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10
    },
    contenedorRecargas: {
        width: '100%',
        height: '67%',
        marginVertical: 16,
        marginLeft: 20
    },
    parrafoRecargas: {
        width: '36%',
        fontSize: 20
    }
})

export default connect(null)(MyCard);