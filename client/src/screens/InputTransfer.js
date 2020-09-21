import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Background from '../components/Background'
import { theme } from '../core/theme';
import BackButton from '../components/BackButton';
import TextInput from '../components/TextInput';
import { Button } from 'react-native-paper';
import { doTransfer } from '../actions/index'
import DropDownPicker from 'react-native-dropdown-picker';

const InputTransfer = ({ navigation, onlineUser, account, doTransfer, transfer, contacts}) => {
	const [state, setState] = useState('')
	const [transf, setTransf] = useState('')
	const [balance2, setBalance] = useState(account.balance)

	useEffect(() => {
		if (transfer?.text) setTransf(transfer.text)
		else setTransf(transfer)
		if (transfer?.balance) setBalance(transfer.balance)
	}, [transfer])

	
	const handleOnChange = (e) => {
		console.log(state)
		setState({
			...state,
			[e.target.name]: e.target.value
		})
	}
	const handleTransfer = () => {
		if (account) doTransfer(account.CVU, state.CVU, state.amount)
		//hacer alerta
	}
	var namesList = []
	contacts? namesList = contacts.map((c) => c.name): namesList = []

	return (
		<Background>
			<BackButton goBack={() => navigation.navigate("Transfers")} />
			<View style= {styles.container}>
			<Text style={styles.top}>TRANSFER</Text>
			<Text style={styles.from}>FROM: {onlineUser.name ? onlineUser.name.toUpperCase() + ' ' + onlineUser.surname.toUpperCase() : ''}</Text>
				<View style = {{marginVertical: 40}} >
					<Text style={styles.balance}>MY BALANCE: ${balance2}</Text>
				<View>
					<Text style={styles.cont}>Select your contact: </Text>
					<DropDownPicker
						zIndex={ 100000 }
						searchable={true}
						searchablePlaceholder="Search your contact: "
        		placeholder='Contacts'
        		items={namesList}
						onChangeItem={item => setState(item)}
						/>
				</View>
				<View>
					<Text style={styles.cont}>CVU</Text>
					<TextInput
						inputStyle = {{ color: 'yellow' }}
						style = {styles.textInput}
						name = 'CVU'
						value = {state.CVU}
						onChange = {e => handleOnChange(e)} 
						editable =  { false }
						/>
				</View>
				<View>
					<Text style={styles.cont}>AMOUNT</Text>
					<TextInput
						style = {styles.textInput}
						keyboardType='number-pad'
						name='amount'
						value={state.amount}
						onChange={e => handleOnChange(e)} />
				</View>
				<Text style={{ color: 'red', fontSize: 16, fontWeight: 'bold' }}>{state.amount > account.balance ? 'You dont have that amount' : state.amount < 50 && state.amount >= 1 ? 'The minimum amount is $50' : state.amount == '' ? '' : null}</Text>
			</View>
			<Button icon="cash-usd" color="#FFFFFF" mode="contained" style={styles.boton} onPress={() => handleTransfer()}> Transfer NOW!</Button>
			</View>
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
	},
	textInput: {
		width: 300,
		zIndex: 2000
	},
	container: {
		width: '100%',
		height: '100%',
		marginVertical: 100
	}
})

const mapStateToProps = state => {
	return {
		onlineUser: state.onlineUser,
		account: state.account,
		transfer: state.transfer,
		contacts: state.contacts,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		doTransfer: (cvuFrom, cvuTo, amount) => dispatch(doTransfer(cvuFrom, cvuTo, amount)),
		getAllContacts: (id) => dispatch(getAllContacts(id)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(InputTransfer)