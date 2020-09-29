import React, { useState } from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { loginUser } from "../actions";
import { theme } from '../core/theme';
import { emailValidator, passwordValidator } from '../core/utils';

const LoginScreen = ({ navigation, loginUser, onlineUser }) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    loginUser(email.value, password.value)

    //navigation.navigate('PositionConsolidated');
  };
  if (onlineUser?.role == 'Client') navigation.navigate('App')
  else if (onlineUser?.city) navigation.navigate('RegisterFourty')
  else if (onlineUser?.dni) navigation.navigate('RegisterThird')
  else if (onlineUser?.role === 'User') navigation.navigate('ActiveEmail')

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('HomeScreen')} />

      <Logo />

      <Header>Welcome back</Header>

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPasswordScreen')}
        >
          <Text style={styles.label}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <Button mode="contained" onPress={_onLoginPressed}  >
        Login
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: 'white',
    backgroundColor: 'black'
  },
  link: {
    fontWeight: 'bold',
    color: 'black',
  },
  asd: {
    backgroundColor: 'red',

  }
});

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (email, password) => dispatch(loginUser(email, password))
  }
}
const mapStateToProps = state => {
  return {
    onlineUser: state.onlineUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
