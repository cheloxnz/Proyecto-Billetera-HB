import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Background from '../components/Background'
import { theme } from '../core/theme';
import BackButton from '../components/BackButton';
import TextInput from '../components/TextInput';
import { Button } from 'react-native-paper';
import { doTransfer } from '../actions/index'

const InputTransfer = ({ navigation, onlineUser, account, doTransfer, transfer }) => {
    const [state, setState] = useState('')
    const [transf, setTransf] = useState('')
    const [balance2, setBalance] = useState(account.balance)

    useEffect(() => {
        if (transfer?.text) setTransf(transfer.text)
        else setTransf(transfer)
        if (transfer?.balance) setBalance(transfer.balance)
    }, [transfer])

    const handleOnChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleTransfer = () => {
        if (account) doTransfer(account.dataValues.CVU, state.CVU, state.amount)
        //hacer alerta
    }

    return (
        <Background>
            <BackButton onPress={() => navigation.navigate('Principal')} />

            <Text style={styles.top}>TRANSFER</Text>
            <Text style={styles.from}>FROM: {onlineUser.name ? onlineUser.name.toUpperCase() + ' ' + onlineUser.surname.toUpperCase() : ''}</Text>
            <View>
                <Text style={styles.balance}>MY BALANCE: ${balance2}</Text>
                <View>
                    <Text style={styles.cont}>CVU</Text>
                    <TextInput
                        keyboardType='number-pad'
                        inputStyle={{ color: 'yellow' }}
                        style={{ width: 300 }}
                        name='CVU'
                        value={state.CVU}
                        onChange={e => handleOnChange(e)} />
                </View>
                <View>
                    <Text style={styles.cont}>AMOUNT</Text>
                    <TextInput
                        keyboardType='number-pad'
                        name='amount'
                        value={state.amount}
                        onChange={e => handleOnChange(e)} />
                </View>
                <Text style={{ color: 'red', fontSize: 16, fontWeight: 'bold' }}>{state.amount > account.balance ? 'You dont have that amount' : state.amount < 50 && state.amount >= 1 ? 'The minimum amount is $50' : state.amount == '' ? '' : null}</Text>
            </View>
            <Button icon="cash-usd" color="#FFFFFF" mode="contained" style={styles.boton} onPress={() => handleTransfer()}> Transfer NOW!</Button>
        </Background>
    )
}
const styles = StyleSheet.create({
    cont: {
        color: theme.colors.primary,
        fontSize: 16,
        alignSelf: "center",
        fontWeight: 'bold'
    },
    balance: {
        backgroundColor: 'yellow',
        alignSelf: 'center',
        position: 'relative',
        bottom: 55,
        padding: 6,
        paddingLeft: 19,
        paddingRight: 19,
        fontSize: 18,
    },
    from: {
        position: 'relative',
        bottom: 160,
        color: 'white'
    },
    top: {
        position: 'absolute',
        top: 30,
        color: theme.colors.primary,
        fontSize: 32,
        fontWeight: '700',
        letterSpacing: 3
    },
    boton: {
        position: 'absolute',
        bottom: 90,
        borderRadius: 15,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 50,
        paddingRight: 50,
        backgroundColor: '#FFFFFF',
        shadowColor: "#000",
        shadowOpacity: 0.7,
        shadowRadius: 26.00,
        elevation: 0,
        shadowOffset: { width: 5, height: 13 },
    }
})

const mapStateToProps = state => {
    return {
        onlineUser: state.onlineUser,
        account: state.account,
        transfer: state.transfer
    }
}
const mapDispatchToProps = dispatch => {
    return {
        doTransfer: (cvuFrom, cvuTo, amount) => dispatch(doTransfer(cvuFrom, cvuTo, amount))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputTransfer)