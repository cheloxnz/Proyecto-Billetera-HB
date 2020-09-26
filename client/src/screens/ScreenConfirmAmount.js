import React, { useState } from 'react';
import { connect } from 'react-redux'
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';
import NavBar from '../components/NavBar';
import FooterNew from '../components/FooterNew';
import CodeQR from '../components/CodeQR';


const ScreenConfirm = ({ navigation }) => {


    return (
        <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>
            <NavBar navigation={navigation} />

            <ImageBackground
                source={require('../assets/consolidated_dot.png')}
                style={styles.background}
            >
                <View style={styles.contenedorLoad}>
                    <View style={{ width: '70%', height: '70%', backgroundColor: '#00296B', alignItems: 'center', borderRadius: 10, textAlign: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 14, marginTop: 20, fontWeight: '700' }}>
                            With the following code you can load money to your account, showing it at any RapiPago or PagoFacil branch.
                            Remember that the code is always the same.
                        </Text>
                        <View style={{ width: '100%', height: '20%', marginTop: 20, backgroundColor: 'white' }}>
                            <Text style={{ color: 'black', fontSize: 30, textAlign: 'center', marginVertical: 25 }}>
                                4848952163987152987
                            </Text>
                        </View>
                        {/* <Text style={{ color: 'white', fontSize: 14, marginTop: 20, textAlign: 'center' }}>
                            Or scan the following QR code with your cell phone.
                        </Text> */}
                        <CodeQR />
                    </View>
                    <TouchableOpacity style={{ width: '70%', backgroundColor: '#00296B', alignItems: 'center', borderRadius: 6, marginTop: 20 }}>
                        <Text style={{ color: 'white', padding: 20, fontSize: 20 }}>
                            Confirm Transaction
                        </Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>

            {/* FOOTER VA EN TODOS LOS SCREEN  */}
            <FooterNew navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
    },
    contenedorLoad: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputAmount: {
        width: '80%',
        borderRadius: 6,
        marginHorizontal: 40
    }
})

export default ScreenConfirm;