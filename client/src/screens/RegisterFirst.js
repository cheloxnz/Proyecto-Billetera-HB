import React, { useState, useEffect, useRef} from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";
import { registerUser, postSendEmail, getAllUsers } from "../actions/index";
import {
  emailValidator,
  passwordValidator,
  confirmPasswordValidator,
} from "../core/utils";


const RegisterScreen = ({ navigation, registerUser, postSendEmail,getAllUsers,users}) => {
useEffect(() => {
  getAllUsers()
},[])
  const emails = []
  users.map((p) => {
    emails.push(p.email)
  })
  const [state, setState] = useState({})

  const onChange = (name, e) => {
    setState({
      ...state,
      [name]: e.nativeEvent.text,
    })
  }
  const _onSignUpPressed = () => {
    const emailError = emailValidator(state.email);
    const passwordError = passwordValidator(state.password);
    const confirmPasswordError = confirmPasswordValidator(
      state.password,
      state.confirmPassword
    );

    if (emailError || passwordError || confirmPasswordError) {
      setState({
        ...state,
        emailError,
        passwordError,
        confirmPasswordError
      })
      return
    }
    var emails = state.email
    registerUser(state.email, state.password);
    setTimeout(() => postSendEmail({ emails }), 2000)
    navigation.navigate("ActiveEmail");
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate("HomeScreen")} />

      <Logo />

      <Header>Create Account</Header>

      <TextInput
        label="Email"
        returnKeyType="next"
        name='email'
        onChange={e => onChange('email' ,e)}
        value={state.email}
        error={!!state.emailError}
        errorText={state.emailError}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        name='password'
        onChange={e => onChange('password', e)}
        value={state.password}
        error={!!state.passwordError}
        errorText={state.passwordError}
        secureTextEntry
      />

      <TextInput
        label="Confirm password"
        returnKeyType="done"
        name='confirmPassword'
        onChange={e => onChange('confirmPassword', e)}
        value={state.confirmPassword}
        error={!!state.confirmPasswordError}
        errorText={state.confirmPasswordError}
        secureTextEntry
      />

      <Button mode="contained" onPress={_onSignUpPressed} style={styles.button}>
        Sign Up
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary,
  },
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: {
    fontWeight: "bold",
    color: "black",
  },
});

const mapStateToProps = (state) => {
  return {
    onlineUser: state.onlineUser,
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (email, password) => dispatch(registerUser(email, password)),
    postSendEmail: (email) => dispatch(postSendEmail(email)),
    getAllUsers: () => dispatch(getAllUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
