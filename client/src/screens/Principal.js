import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, StyleSheet, Text, View, ScrollView, Alert, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { getAccount } from '../actions';



const Principal = ({navigation, getAccount, account, onlineUser}) => {

    useEffect(()=> {
        getAccount(onlineUser.id)
    },[onlineUser])
    return (
            <View style={styles.contenedorPadre}>

                {/* ------- CONTENT ------- */}
                <View style={styles.contentPadre}>
                    <View style={styles.contentHijo}>
                        <View style={styles.contentInfo}>
                            <Text style={styles.saldo}>{onlineUser.name + " " + onlineUser.surname}</Text>
                            <Text style={styles.parrafoSaldo}>Balance</Text>
                        </View>
                        <View style={styles.contentBotones}>
                            <View style={styles.contentRecargar}>
                                <Button title='Load' onPress ={() => navigation.toggleDrawer()}  style={styles.botonRecargar}/>
                            </View>
                            <View style={styles.contentEnviar}>
                                <Button title='Send' onPress ={() => navigation.navigate("Transfers")} style={styles.botonEnviar}/>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.mov}>Movements</Text>
                    <FontAwesome name={'chevron-circle-down'} style={styles.sortDown} size={20}/>

                    <ScrollView style={styles.contentHijoDos}>
                        <View style={styles.contentMov}>
                            <Text style={styles.servicio}>Netflix</Text>
                            <Text style={styles.gastos}>- $500</Text>
                        </View>
                        <View style={styles.contentMov}>
                            <Text style={styles.servicio}>Fulano de Tal</Text>
                            <Text style={styles.ingresos}>+ $1800</Text>
                        </View>
                        <View style={styles.contentMov}>
                            <Text style={styles.servicio}>Pago fácil</Text>
                            <Text style={styles.gastos}>- $600</Text>
                        </View>
                        <View style={styles.contentMov}>
                            <Text style={styles.servicio}>YPF</Text>
                            <Text style={styles.gastos}>- $2500</Text>
                        </View>
                        <View style={styles.contentMov}>
                            <Text style={styles.servicio}>McDonald</Text>
                            <Text style={styles.gastos}>- $750</Text>
                        </View>
                        <View style={styles.contentMov}>
                            <Text style={styles.servicio}>Netflix</Text>
                            <Text style={styles.gastos}>- $500</Text>
                        </View>
                        <View style={styles.contentMov}>
                            <Text style={styles.servicio}>Fulano de Tal</Text>
                            <Text style={styles.ingresos}>+ $1800</Text>
                        </View>
                        <View style={styles.contentMov}>
                            <Text style={styles.servicio}>Pago fácil</Text>
                            <Text style={styles.gastos}>- $600</Text>
                        </View>
                        <View style={styles.contentMov}>
                            <Text style={styles.servicio}>YPF</Text>
                            <Text style={styles.gastos}>- $2500</Text>
                        </View>
                        <View style={styles.contentMov}>
                            <Text style={styles.servicio}>McDonald</Text>
                            <Text style={styles.gastos}>- $750</Text>
                        </View>
                        <View style={styles.contentMov}>
                            <Text style={styles.servicio}>Netflix</Text>
                            <Text style={styles.gastos}>- $500</Text>
                        </View>
                        <View style={styles.contentMov}>
                            <Text style={styles.servicio}>Fulano de Tal</Text>
                            <Text style={styles.ingresos}>+ $1800</Text>
                        </View>
                        <View style={styles.contentMov}>
                            <Text style={styles.servicio}>Pago fácil</Text>
                            <Text style={styles.gastos}>- $600</Text>
                        </View>
                        <View style={styles.contentMov}>
                            <Text style={styles.servicio}>YPF</Text>
                            <Text style={styles.gastos}>- $2500</Text>
                        </View>
                        <View style={styles.contentMov}>
                            <Text style={styles.servicio}>McDonald</Text>
                            <Text style={styles.gastos}>- $750</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>

    )
}
const styles = StyleSheet.create({

    contenedorPadre: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'space-between'
    },

    homeCont: {
        width: '25%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 4
    },
    parrafoH: {
        marginBottom: 10
    },
    transferCont: {
        width: '25%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 4
    },
    parrafoT: {
        marginBottom: 10
    },
    transferCard: {
        width: '25%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 4
    },
    parrafoC: {
        marginBottom: 10
    },
    payContent: {
        width: '25%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 4
    },
    parrafoP: {
        marginBottom: 10,
        marginRight: 14
    },
    contentPadre: {
        width: '100%',
        flex: 1,
    },
    contentHijo: {
        width: '90%',
        height: '30%',
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    mov: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    },
    contentHijoDos: {
        width: '70%',
        marginTop: 4,
        marginHorizontal: 60,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    contentInfo: {
        alignItems: 'center',
        marginVertical: 25
    },
    saldo: {
        fontSize: 45
    },
    parrafoSaldo: {
        fontSize: 20
    },
    contentBotones: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    contentRecargar: {
        width: '30%',
        marginRight: 10,
    },
    contentEnviar: {
        width: '30%',
        marginLeft: 10
    },
    sortDown: {
        color: 'white',
        textAlign: 'center'
    },
    contentMov: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    servicio: {
        fontSize: 18,
    },
    gastos: {
        color: 'red'
    },
    ingresos: {
        color: 'green'
    }
})

const mapStateToProps = state => {
    return {
        account: state.account,
        onlineUser: state.onlineUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAccount: (id) => dispatch(getAccount(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Principal);
