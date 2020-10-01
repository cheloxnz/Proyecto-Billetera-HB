import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Background from '../components/Background'
import { theme } from '../core/theme';
import BackButton from '../components/BackButton';
import TextInput from '../components/TextInput';
import { Modal, Portal, Button } from 'react-native-paper';
import { doTransfer, getAccount, getBalance, TouchableOpacity } from '../actions/index'
import Constants from 'expo-constants';


const InputTransfer = ({ navigation, onlineUser, account, doTransfer, transfer, contacts, friendCVU, transfersAll,
	getBalance, balance }) => {
	const [state, setState] = useState('')
	const [transf, setTransf] = useState('')
	const [balance2, setBalance] = useState(account.balance)
	const [visible, setVisible] = React.useState(false);

	const showModal = () => setVisible(true);

	const hideModal = () => setVisible(false);

	useEffect(() => {
		if (transfer?.text) setTransf(transfer.text)
		else setTransf(transfer)
		if (transfer?.balance) setBalance(transfer.balance)
	}, [transfer])
	useEffect(() => {
		getBalance(onlineUser.id)
	}, [transfersAll.length])

	const handleOnChange = (name, e) => {
		if (friendCVU != 0) {
			setState({
				...state,
				CVU: friendCVU,
				[name]: e.nativeEvent.text
			})
		} else {
			setState({
				...state,
				[name]: e.nativeEvent.text
			})
		}
	}

	const handleTransfer = (navigation) => {
		if (account) doTransfer(account.CVU, state.CVU, state.amount)
		setState('')
		//navigation.navigate('Principal')
		//hacer alerta
	}

    if (state.PIN == onlineUser.pin){
		handleTransfer()
		hideModal()
		alert('Transaction in process')
		setState({
			CVU: friendCVU,
			PIN: '',
			amount: ''
		})
	}

	return (
		<View style={styles.contenedorPrincipal}>
			<Background>
				<BackButton goBack={() => navigation.navigate("Transfers")} />
				<View style={styles.container}>
					<Text style={styles.top}>TRANSFER</Text>
					<Text style={styles.from}>FROM: {onlineUser.name ? onlineUser.name.toUpperCase() + ' ' + onlineUser.surname.toUpperCase() : ''}</Text>
					<View style={{ marginVertical: 40 }} >
						<Text style={styles.balance}>MY BALANCE: ${balance?.balance}</Text>
						<View style={styles.inputCvu}>
							<Text style={styles.cont}>CVU</Text>
							<TextInput
								keyboardType='number-pad'
								inputStyle={{ color: 'yellow' }}
								style={styles.textInput}
								name='CVU'
								value={friendCVU != 0 ? friendCVU : state.CVU ? state.CVU : ''}
								onChange={e => handleOnChange('CVU', e)}
								editable={friendCVU != 0 ? false : state.CVU ? true : true}
							/>
						</View>
						<View style={styles.inputAmount}>
							<Text style={styles.cont}>AMOUNT</Text>
							<TextInput
								style={styles.textInput}
								keyboardType='number-pad'
								name='amount'
								value={state.amount}
								onChange={e => handleOnChange('amount', e)} />
						</View>
						<Text style={{ color: 'red', fontSize: 16, fontWeight: 'bold' }}>{state.amount > balance.balance ? 'You dont have that amount' : state.amount < 50 && state.amount >= 1 ? 'The minimum amount is $50' : state.amount == '' ? '' : null}</Text>
					</View>
					<Portal >
						<Modal visible={visible} onDismiss={hideModal}>
							<View style={{ height: 200, backgroundColor: 'white', width: '90%', borderRadius: 30, alignSelf: 'center' }}>
								<Text style={{ color: 'black', fontSize: 24, textAlign: 'center', backgroundColor: 'yellow', borderRadius: 12, width: '80%', marginLeft: '10%', marginTop: '5%'}}>Type your PIN to confirm</Text>
								<TextInput 
								style={{width: '60%', marginLeft: '20%', borderRadius: 5, backgroundColor: 'lightgray'}}
								label='PIN'
								keyboardType='number-pad'
								onChange={e => handleOnChange('PIN', e)}
								value={state.PIN}
								
								></TextInput>
							</View>
						</Modal>

					</Portal>
					<Button icon="cash-usd" color="#FFFFFF" mode="contained" disabled={account?.state == 'active' ? false : true} style={styles.boton} onPress={() => { showModal() }}> Transfer NOW!</Button>
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
	inputCvu: {
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
		position: 'absolute',
		top: 10,
		color: theme.colors.primary,
		fontSize: 32,
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
		balance: state.balance
	}
}

const mapDispatchToProps = dispatch => {
	return {
		doTransfer: (cvuFrom, cvuTo, amount) => dispatch(doTransfer(cvuFrom, cvuTo, amount)),
		getAllContacts: (id) => dispatch(getAllContacts(id)),
		getBalance: (id) => dispatch(getBalance(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(InputTransfer)