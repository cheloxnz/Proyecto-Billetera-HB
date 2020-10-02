import React, { useEffect }from "react";
import { connect } from "react-redux";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import { registerUser, updateUserData, createAccount } from '../actions';
import { TouchableHighlight, View } from 'react-native';

const HomeScreen = ({ navigation, registerUser, updateUserData, onlineUser, createAccount}) => {


  let body = 
    {
    "phone" : 351288888,
    "address" : "Colon 400",
    "province" : "Cordoba",
    "postalCode" : 5000,
    "city" : "Cordoba",
    "dni" : 40159951,
    "name" : "Admin",
    "surname" : "Admin",
    "username" : "admin",
    "birthDate" : "12/12/1200",
    "role" : "Client",
    }
    let body2 = {
     "phone" : 3512642969,
    "address" : "gral paz 400",
    "province" : "Cordoba",
    "postalCode" : 5001,
    "city" : "Cordoba",
    "dni" : 40111111,
    "name" : "Lionel",
    "surname" : "Messi",
    "username" : "LeoMessi",
    "birthDate" : "12/12/1800",
    "role" : "Client", 
    }
  
 return (
  <Background>
    <TouchableHighlight onPress={() => {
      registerUser("admin@gmail.com", "12345678")
      .then((res) => updateUserData(body, 1)
      .then(createAccount(1))
      .then(registerUser('leomessi@gmail.com', '12345678')
        .then((res) => updateUserData(body2, 2)
        .then(createAccount(2)
          .then(createAccount(3)
            .then(createAccount(4)
              .then(createAccount(5))))))
          )
        )
    } }>
      <View>
      <Logo />
      </View> 
    </TouchableHighlight>
    <Header>Henry Bank</Header>

    <Paragraph style={{ color: "white" }}>The Henrys virtual wallet</Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate("LoginScreen")}>
      Login
    </Button>
    <Button mode="outlined" onPress={() => navigation.navigate("RegisterFirst")}>
      <Paragraph style={{ color: "black" }}>Sign Up</Paragraph>
    </Button>
    <Paragraph style={{ color: "black", 'fontWeight':'400', marginTop:15 }}>Do you need help?</Paragraph>

{/*     <Button mode="contained" onPress={() => navigation.navigate("ScreenPayments")}>
      ASDADAD
    </Button> */}
    
  </Background>

)};

const mapStateToProps = state => {
  return {
    onlineUser: state.onlineUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    registerUser: (email, password) => dispatch(registerUser(email,password)),
    updateUserData: (body, id) => dispatch(updateUserData(body,id)),
    createAccount: (id) => dispatch(createAccount(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
