import React, { useState } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";
import { registerUser, updateUserData } from "../actions";
import {
  nameValidator,
  surnameValidator,
  usernameValidator,
  dniValidator,
  phoneValidator,
  birthDateValidator,
} from "../core/utils";

const RegisterSecond = ({ navigation, onlineUser, updateUserData }) => {
  const [name, setName] = useState({ value: "", error: "" });
  const [surname, setSurname] = useState({ value: "", erorr: "" });
  const [username, setUsername] = useState({ value: "", error: "" });
  const [dni, setDni] = useState({ value: "", error: "" });
  const [phone, setPhone] = useState({ value: "", error: "" });
  const [birthDate, setBirthDate] = useState({ value: "", error: "" });

  const _onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const surnameError = surnameValidator(surname.value);
    const usernameError = usernameValidator(username.value);
    const dniError = dniValidator(dni.value);
    const phoneError = phoneValidator(phone.value);
    const birthDateError = birthDateValidator(birthDate.value);

    if (surnameError || usernameError || nameError || dniError || phoneError || birthDateError) {
      setName({ ...name, error: nameError });
      setSurname({ ...surname, error: surnameError });
      setUsername({ ...username, error: usernameError });
      setDni({ ...dni, error: dniError });
      setPhone({ ...phone, error: phoneError });
      setBirthDate({ ...birthDate, error: birthDateError });
      return;
    }

    var body = {
      name: name.value,
      surname: surname.value,
      username: username.value,
      dni: dni.value,
      phone: phone.value,
      birthDate: birthDate.value
    }
    updateUserData(body, onlineUser.id)
    navigation.navigate("RegisterThird");
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate("RegisterSecond")} />

      <Header>Create Account</Header>
      <View style ={{width: '100%'}} >
      <TextInput
        styleView={{ width: "100%" }}
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: "" })}
        error={!!name.error}
        errorText={name.error}
      />

      <TextInput
        styleView={{ width: "150px" }}
        label="SurName"
        returnKeyType="next"
        value={surname.value}
        onChangeText={(text) => setSurname({ value: text, error: "" })}
        error={!!surname.error}
        errorText={surname.error}
      />

      <TextInput
        label="UserName"
        returnKeyType="next"
        value={username.value}
        onChangeText={(text) => setUsername({ value: text, error: "" })}
        error={!!username.error}
        errorText={username.error}
      />

      <TextInput
        label="DNI"
        returnKeyType="next"
        keyboardType="numeric"
        value= {dni.value}
        onChangeText={(text) => setDni({ value: text, error: "" })}
        error={!!dni.error}
        errorText={dni.error}
      />

      <TextInput
        label="Phone"
        value = {phone.value}
        keyboardType="numeric"
        onChangeText={(text) => setPhone({ value: text, error: "" })}
        error={!!phone.error}
        errorText={phone.error}
      />

      <TextInput
        label="BirthDate"
        value = {birthDate.value}
        onChangeText={(text) => setBirthDate({ value: text, error: "" })}
        error={!!birthDate.error}
        errorText={birthDate.error}
      />
      </View>
     
      <Button mode="contained" onPress={_onSignUpPressed} style={styles.button}>
        Next
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
    color: theme.colors.primary,
  },
});

const mapStateToProps = (state) => {
  return {
    onlineUser: state.onlineUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (email, password) => dispatch(registerUser(email, password)),
    updateUserData: (body, id) => dispatch (updateUserData(body, id))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RegisterSecond);
