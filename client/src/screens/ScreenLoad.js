import React, { useState } from 'react';
import { connect } from 'react-redux'
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';
import NavBar from '../components/NavBar';
import FooterNew from '../components/FooterNew';
import Input from '../components/TextInput';
import { amountLoad } from "../actions";
import Constants from 'expo-constants';
const ScreenLoad = ({ navigation, amountLoad }) => {
    const [state, setState] = useState('')

    const handleOnChange = (e) => {
        setState({
            ...state,
            amount: e.nativeEvent.text
        })
    }
    return (
        <View style={styles.contenedorPrincipal}>
            <NavBar navigation={navigation} />

            <ImageBackground
                source={require('../assets/consolidated_dot.png')}
                style={styles.background}
            >
                <View style={styles.contenedorLoad}>
                    <View style={{ width: '70%', height: '25%', backgroundColor: '#00296B', alignItems: 'center', borderRadius: 10 }}>
                        <Text style={{ color: 'white', fontWeight: '700', fontSize: 20, textAlign: 'center' }}>
                            Amount to load
                        </Text>
                        <View style={{ width: '100%', marginTop: 20 }}>
                            <Input
                                style={styles.inputAmount}
                                label='Enter the amount'
                                placeholder='Amount'
                                keyboardType='number-pad'
                                name='amount'
                                value={state.amount}
                                onChange={e => handleOnChange(e)} />

                        </View>

                    </View>
                    <TouchableOpacity style={{ width: '70%', backgroundColor: '#00296B', alignItems: 'center', borderRadius: 6, marginTop: 20 }}>
                        <Text style={{ fontWeight: '700', color: 'white', padding: 20, fontSize: 20 }} onPress={() => { navigation.navigate("Confirm"), amountLoad(state.amount, 1) }}>
                            Next
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

const mapDispatchToProps = (dispatch) => {
    return {
        amountLoad: (amount, sucursal) => dispatch(amountLoad(amount, sucursal))

    }
}

export default connect(null, mapDispatchToProps)(ScreenLoad);