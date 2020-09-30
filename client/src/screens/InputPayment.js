import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Background from '../components/Background'
import { theme } from '../core/theme';
import BackButton from '../components/BackButton';
import TextInput from '../components/TextInput';
import { Button } from 'react-native-paper';
import { doTransfer, getAccount, getBalance, doPayment } from '../actions/index'
import Constants from 'expo-constants';


const InputPayment = ({ navigation, onlineUser, balance, getBalance, getAccount, account, payment, doPayment }) => {
	useEffect(() => {
		getBalance(onlineUser.id)
		getAccount(onlineUser.id)
	}, [])
	const [state, setState] = React.useState('')

        const handlePayment = (navigation) => {
			doPayment(state, payment, onlineUser.dni)
			setState('')
			navigation.navigate('Home')
			//hacer alerta
		}
		
		const handleOnChange = (e) => {
			setState(e.nativeEvent.text)
		}

	return (
		<View style={styles.contenedorPrincipal}>
			<Background>
				<BackButton goBack={() => navigation.navigate("Transfers")} />
				<View style={styles.container}>
					<Text style={styles.top}>Pay your service</Text>
					<Text style={styles.from}>FROM: {onlineUser.name ? onlineUser.name.toUpperCase() + ' ' + onlineUser.surname.toUpperCase() : ''}</Text>
					<View style={{ marginVertical: 40 }} >
						<Text style={styles.balance}>MY BALANCE: ${balance?.balance}</Text>
						<View style={styles.inputService}>
							<Text style={styles.cont}>Service to pay</Text>
							<TextInput
								inputStyle={{ color: 'yellow' }}
								style={styles.textInput}
								name='service'
								value={payment}
								editable={false}
							/>
						</View>
						<View style={styles.inputAmount}>
							<Text style={styles.cont}>AMOUNT</Text>
							<TextInput
								style={styles.textInput}
								keyboardType='number-pad'
								name='amount'
								value={state.amount}
								onChange={e => handleOnChange(e)} />
						</View>
						<Text style={{ color: 'red', fontSize: 16, fontWeight: 'bold' }}>{state.amount > balance.balance ? 'You dont have that amount' : state.amount < 50 && state.amount >= 1 ? 'The minimum amount is $50' : state.amount == '' ? '' : null}</Text>
					</View>
					<Button 
					    icon="cash-usd"
					    color="#FFFFFF" 
					    mode="contained" 
					    disabled={account?.state == 'active' ? false : true} style={styles.boton} onPress={() => { handlePayment(navigation) }}>
					    	 Pay now
					</Button>
				</View>
			</Background>
		</View>
	)
}
const styles = StyleSheet.create({
	contenedorPrincipal: {
		width: "100%",
		height: "100%",
		paddingTop: Constants.statusBarHeight,
	},
	cont: {
		color: theme.colors.primary,
		fontSize: 16,
		alignSelf: "center",
		fontWeight: 'bold',
		marginBottom: 20
	},
	balance: {
		backgroundColor: 'yellow',
		alignSelf: 'center',
		position: 'relative',
		bottom: 8,
		padding: 6,
		paddingLeft: 19,
		paddingRight: 19,
		fontSize: 18,
		marginTop: 30
	},
	inputService: {
		marginTop: 30
	},
	inputAmount: {
		marginTop: 30
	},
	from: {
		position: 'relative',
		bottom: 160,
		color: 'white'
	},
	top: {
		width: '100%',
		position: 'absolute',
		top: 10,
		color: theme.colors.primary,
		fontSize: 30,
		fontWeight: '700',
		letterSpacing: 3,
	},
	boton: {
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
	},
	textInput: {
		width: 300,
		zIndex: 2000
	},
	container: {
		width: '100%',
		height: '100%',
		marginTop: 70
	},
	contenedorDrop: {
		marginTop: 30
	}
})

const mapStateToProps = state => {
	return {
		onlineUser: state.onlineUser,
		account: state.account,
		transfer: state.transfer,
		contacts: state.contacts,
		friendCVU: state.friendCVU,
		transfersAll: state.transfersAll,
		balance: state.balance,
		payment: state.payment
	}
}

const mapDispatchToProps = dispatch => {
	return {
		doTransfer: (cvuFrom, cvuTo, amount) => dispatch(doTransfer(cvuFrom, cvuTo, amount)),
		getAllContacts: (id) => dispatch(getAllContacts(id)),
		getBalance: (id) => dispatch(getBalance(id)),
		getAccount: (id) => dispatch(getAccount(id)),
		doPayment: (amount, e, p) => dispatch(doPayment(amount, e, p))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(InputPayment)