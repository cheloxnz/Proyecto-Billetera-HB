import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import { emailValidator } from '../core/utils';
import Background from '../components/Background';
import BackButton from '../components/BackButton';
import Logo from '../components/Logo';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import ButtonM from '../components/Button';
import Constants from 'expo-constants';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState({ value: '', error: '' });

  const _onSendPressed = () => {
    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }
  };

  return (
    <View style={styles.contenedorPrincipal}>
    <Background>
      <BackButton goBack={() => navigation.navigate('Home')} />

      <Logo />

      <Header>Restore Password</Header>

      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <ButtonM mode="contained" onPress={_onSendPressed} style={styles.button}>
        Send Reset Instructions
      </ButtonM>
      
    </Background>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedorPrincipal: {
    width: "100%",
    height: "100%",
    paddingTop: Constants.statusBarHeight,
},
  back: {
    width: '100%',
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
  label: {
    color: 'white',
    width: '100%',
    marginRight: 10
  },
});

export default connect(null)(ForgotPasswordScreen);
