import React, { useState } from 'react';
import { connect } from 'react-redux'
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import NavBar from '../components/NavBar';
import FooterNew from '../components/FooterNew';
import CodeQR from '../components/CodeQR';
import qr from "../assets/qr.png"
import { doLoad } from "../actions";
import Constants from 'expo-constants';


const ScreenConfirm = ({ navigation, amount, onlineUser, doLoad }) => {

    var codigo = 123456

    return (
        <View style={styles.contenedorPrincipal}>
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
                            <Text style={{ color: 'black', fontSize: 28, textAlign: 'center', marginVertical: 25 }}>
                                4848952198
                            </Text>
                        </View>
                        <Text style={{ color: 'white', fontSize: 14, marginTop: 20, textAlign: 'center' }}>
                            Or scan the following QR code with your cell phone.
                        </Text>
                        <Image style={{ height: 200, width: 200, backgroundColor: "white" }} source={require('../assets/qr.png')} />
                    </View>
                    <TouchableOpacity onPress={() => { doLoad(amount.amount, amount.sucursal, onlineUser.dni, codigo) }} style={{ width: '70%', backgroundColor: '#00296B', alignItems: 'center', borderRadius: 6, marginTop: 20 }}>
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
    contenedorPrincipal: {
        width: "100%",
        height: "100%",
        paddingTop: Constants.statusBarHeight,
    },
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

const mapStateToProps = state => {
    return {
        amount: state.amount,
        onlineUser: state.onlineUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        doLoad: (amount, sucursal, dni, code) => dispatch(doLoad(amount, sucursal, dni, code))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ScreenConfirm);