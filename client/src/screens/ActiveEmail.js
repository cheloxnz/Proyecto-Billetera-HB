import React, { useState } from "react";
import { connect } from "react-redux";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import BackButton from "../components/BackButton";
import Paragraph from "../components/Paragraph";
import { TextInput } from "react-native-paper";
import {} from "../actions/index";
import { activeValidator } from "../core/utils";

const ActiveEmail = ({ navigation, registerUser, onlineUser}) => {
  const [activecode, setActivecode] = useState({ value: "", error: "" });

  const _onSignUpPressed = () => {
    const activeError = activeValidator(
      activecode.value,
      onlineUser.generatedCode
    );

    if (activeError) {
      setActivecode({ ...activecode, error: activeError });
      return;
    }
    navigation.navigate("RegisterSecond");
  };

  return (
    <Background>
      <Header>Active your mail please</Header>
      <BackButton goBack={()=> {navigation.navigate('HomeScreen')}} />
      <TextInput
        label="Insert here you code"
        keyboardType="numeric"
        onChangeText={(text) => setActivecode({ value: text, error: "" })}
      />
      <Button mode="contained" onPress={_onSignUpPressed}>
        Active my email
      </Button>
    </Background>
  );
};

const mapStateToProps = (state) => {
  return {
    onlineUser: state.onlineUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActiveEmail);
