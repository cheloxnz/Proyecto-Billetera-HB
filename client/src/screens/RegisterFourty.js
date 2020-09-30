import React from "react";
import { connect } from "react-redux";
import { Text, View, StyleSheet } from "react-native";
import BackButton from "../components/BackButton";
import Background from "../components/Background";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { validatePIN } from "../core/utils";
import { setPinUser, activeUser, createAccount } from "../actions/"


const RegisterFourty = ({ navigation, setPinUser, onlineUser, activeUser, createAccount }) => {
  const [input, setInput] = React.useState({ value: "", error: "" })
  
  const handleConfirm = () => {
    const errorPIN = validatePIN(input.value)
    if (errorPIN) {
      setInput({ ...input, error: errorPIN });
      return;
    }

    setPinUser(onlineUser.id, input.value)    
    activeUser(onlineUser.id);
    createAccount(onlineUser.id);
    navigation.navigate('App')
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate("RegisterThird")} />
      <View style={styles.container}>
        <View style={styles.text}>
          <Text style={styles.header}>Generate your access PIN</Text>          
        </View>
        <View style={styles.input}>
          <TextInput
            label="PIN"
            returnKeyType="next"
            keyboardType="numeric"
            onChangeText={(text) => setInput({ value: text, error: "" })} 
            error={!!input.error}     
            errorText={input.error} 
            value={input.value}
          />          
          <Button mode="contained" onPress={() => {handleConfirm()}}>
            Confirm
          </Button>
        </View>
      </View>
    </Background>

  )
};


const styles = StyleSheet.create({
  text: {
    flex: 1,
    justifyContent: 'center' 
  },
  container: {
    flex: 1,
    justifyContent: 'space-around'
  },
  header: {
    fontSize: 20,
    color: "yellow",
    fontWeight: "bold",
  },
  input: {
    marginBottom: "50%"    
  }
});


const mapDispatchToProps = dispatch => {
  return {
    setPinUser: (idUser, pin) => dispatch(setPinUser(idUser, pin)),
    activeUser : (idUser) => dispatch(activeUser(idUser)),
    createAccount: (idUser) => dispatch(createAccount(idUser))
  }
};

const mapStateToProps = state => {
  return {
    onlineUser: state.onlineUser
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterFourty)