import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Constants from 'expo-constants';
import { View, StyleSheet, Text, ImageBackground, Button } from 'react-native';
import NavBar from '../components/NavBar';
import FooterNew from '../components/FooterNew';
import { Divider } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const BuyaSell = ({ navigation }) => {

    return (
        <View style={styles.contenedorByS}>
            <NavBar navigation={navigation} />

            <ImageBackground
                source={require('../assets/consolidated_dot.png')}
                style={styles.background}
            >
                <View style={styles.contenedorMid}>
                    <View style={styles.contenedorBuy}>
                        <Text style={styles.parrafoBuy}>
                            Buy and Sell BitCoins
                    </Text>
                    </View>
                    <Divider />
                    <View style={styles.contentBotones}>
                        <View style={styles.contentRecargar}>
                            <Button
                                style={styles.botonBuy}
                                title='BUY'
                            />
                        </View>
                        <View style={styles.contentEnviar}>
                            <Button
                                style={styles.botonSell}
                                title='TO SELL'
                            />
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ fontSize: 20, color: 'white', marginTop: 20 }}>
                            ¡We are sorry!
                        </Text>
                        <FontAwesome name='plug' size={100} style={{ color: 'white', marginTop: 10 }} />
                        <Text style={{ fontSize: 16, color: 'white', marginTop: 40, textAlign: 'center' }}>
                            We are sorry, we are adapting the systems to the new BCRA regulations.
                        </Text>
                    </View>

                </View>
            </ImageBackground>
            <FooterNew navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    contenedorByS: {
        width: '100%',
        height: '100%',
        paddingTop: Constants.statusBarHeight,
    },
    background: {
        flex: 1,
        width: '100%',
    },
    contenedorMid: {
        width: '100%',
        height: '100%'
    },
    contenedorBuy: {
        width: '100%',
        height: '6%',
        backgroundColor: 'white'
    },
    parrafoBuy: {
        fontSize: 20,
        fontWeight: '700',
        marginVertical: 10,
        marginHorizontal: 10
    },
    contentBotones: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginTop: 6
    },
    contentRecargar: {
        width: '30%',
        marginRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
    contentEnviar: {
        width: '30%',
        marginLeft: 6,
        paddingTop: 10,
        paddingBottom: 10,
    },
    botonBuy: {
        paddingTop: 10,
        paddingBottom: 10,
        height: 6
    }
})


export default connect(null)(BuyaSell);