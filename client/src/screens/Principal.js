import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, StyleSheet, Text, View, ScrollView, YellowBox } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { getAccount, getTransfersAll, getAllUsers, getBalance, getAllAccounts } from '../actions';
import { Divider } from 'react-native-paper';
import UserAvatar from 'react-native-user-avatar';
//import { LineChart, XAxis, Grid } from 'react-native-svg-charts'


const Principal = ({ navigation, getAccount, account, onlineUser,
    transfersAll, users, getBalance, balance, getTransfersAll, getAllUsers, getAllAccounts, accounts }) => {

    const data = ["aca van ingresos y egresos"]


    useEffect(() => {
        getAllAccounts()
        getAllUsers()
        getAccount(onlineUser.id)
        getBalance(onlineUser.id)
    }, [onlineUser])

    useEffect(() => {
        if (account) { getTransfersAll(account.Naccount) }
    }, [account])

    console.log(transfersAll);

    var flag = false;
    if (transfersAll.length > 1) flag = true;

    return (
        <View style={styles.contenedorPadre}>

            {/* ------- CONTENT ------- */}
            <View style={styles.contentPadre}>
                <View style={styles.contentHijo}>
                    <View style={styles.contentInfo}>
                        <Text style={styles.cta}>N° CTA: {account?.Naccount}</Text>
                        <Text style={styles.saldo}>{onlineUser.name + " " + onlineUser.surname}</Text>
                        <Text style={styles.parrafoSaldo}>My Balance $ {balance?.balance} </Text>
                    </View>
                </View>
                <View style={styles.contentBotones}>
                    {/* <View style={styles.contentRecargar}>
                        <Button title='Load' onPress={() => navigation.navigate('Load')} style={styles.botonRecargar} />
                    </View>
                    <View style={styles.contentEnviar}>
                        <Button title='Send' onPress={() => navigation.navigate("Transfers")} style={styles.botonEnviar} />
                    </View> */}
                </View>
            </View>
            <Text style={{ color: 'white', fontWeight: '700', fontSize: 20, textAlign: 'center' }}>Movements</Text>
            <FontAwesome name={'chevron-circle-down'} style={styles.sortDown} size={20} />
            <View style={styles.containerTrans}>
                {
                    <ScrollView style={styles.contentHijoDos}>
                        {flag ? transfersAll.map((t) => <View style={styles.contentMov}>

                            <UserAvatar size={30} bgColors={['#ccc', '#fafafa', '#ccaabb']} name="Matias Córdoba" />

                            <Text style={styles.servicio}>

                                {account?.Naccount == t.receptor ? accounts?.map((a) => { if (a.Naccount == t.emisor) { console.log(a.Naccount, t.emisor, "facu toy cagao de hambre  "); return users.map((u) => { if (a.userId == u.id) { return u.name + " " + u.surname } }) } }) :
                                    accounts?.map((a) => { if (a.Naccount == t.receptor) { return users.map((u) => { if (a.userId == u.id) { return u.name + " " + u.surname } }) } })}

                            </Text>
                            {account?.Naccount == t.receptor ?
                                <Text style={styles.ingresos}> + $ {t.Quantity}</Text> : <Text style={styles.egresos}> - $ {t.Quantity}</Text>

                            }


                            <Divider />
                        </View>
                        ) : null}
                    </ScrollView>}
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
        width: '100%',
        height: '60%',
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: 'lightgray',
        opacity: 0.9,
    },
    mov: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    },
    contentHijoDos: {
        marginBottom: "20",
        width: '100%',
        height: '50%',
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: 'lightgray',
        opacity: 0.9,

    },
    contentInfo: {
        flex: 1,
        height: '30%',
        alignItems: 'center',
        marginVertical: 25
    },
    saldo: {
        borderRadius: 10,
        marginTop: 20,
        backgroundColor: "yellow",
        fontSize: 38,
        opacity: 0.6,
    },
    parrafoSaldo: {
        borderRadius: 10,
        marginTop: 20,
        color: "yellow",
        backgroundColor: "black",
        fontSize: 20,
        opacity: 0.6,
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

        fontSize: 20
    },
    ingresos: {
        fontSize: 20,
        color: 'green'

    },
    egresos: {
        fontSize: 20,
        color: 'red'
    },
    containerTrans: {
        marginBottom: "30",
        opacity: 0.9,
        borderRadius: 10,
        backgroundColor: 'lightgray',
        alignItems: "center",
        width: '100%',
        flex: 1
    },
    cta: {
        fontSize: 15
    }

})

const mapStateToProps = state => {
    return {
        account: state.account,
        onlineUser: state.onlineUser,
        transfersAll: state.transfersAll,
        users: state.users,
        balance: state.balance,
        accounts: state.accounts

    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAccount: (id) => dispatch(getAccount(id)),
        getTransfersAll: (Naccount) => dispatch(getTransfersAll(Naccount)),
        getAllUsers: () => dispatch(getAllUsers()),
        getBalance: (id) => dispatch(getBalance(id)),
        getAllAccounts: () => dispatch(getAllAccounts()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Principal);
