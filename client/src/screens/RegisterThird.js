import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import DropDownPicker from 'react-native-dropdown-picker';
import { theme } from "../core/theme";
import { registerUser, updateUserData } from "../actions";
import {
  addressValidator,
  provinceValidator,
  cityValidator,
  postalCodeValidator,
} from "../core/utils";
import Axios from "axios";

const RegisterThird = ({ navigation, updateUserData, onlineUser }) => {
  const [address, setAddress] = useState({ value: "", error: "" });
  const [add, setAdd] = useState ([])
  const [province, setProvince] = useState({ value: "", erorr: "" });
  const [listProvince, setListProvince] = useState([])
  const [city, setCity] = useState({ value: "", error: "" });
  const [listCity, setListCity] = useState([])
  const [postalCode, setPostalCode] = useState({ value: "", error: "" });

  useEffect(() => {
    Axios.get(`https://apis.datos.gob.ar/georef/api/provincias`)
      .then(prov => setListProvince(prov.data.provincias.map((province) => ({ label: province.nombre, value: province.nombre, id: province.id }))))
    Axios.get(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${province.id}&campos=id,nombre&max=900`)
      .then(city => setListCity(city.data.localidades.map(cit => ({ label: cit.nombre, value: cit.nombre }))))
  }, [province])

  function addressVerify (addre) {
    Axios.get(`https://apis.datos.gob.ar/georef/api/direcciones?direccion=${addre}`)
    .then(add => setAdd(add.data.direcciones.filter(match => match.provincia.id == province.id)))
  }


  const _onSignUpPressed = () => {
    const addressError = addressValidator(add);
    const provinceError = provinceValidator(province.value);
    const cityError = cityValidator(city.value);
    const postalCodeError = postalCodeValidator(postalCode.value);

    if (
      addressError ||
      provinceError ||
      cityError ||
      postalCodeError
    ) {
      setAddress({ ...address, error: addressError });
      setProvince({ ...province, error: provinceError });
      setCity({ ...city, error: cityError });
      setPostalCode({ ...postalCode, error: postalCodeError });
      return;
    }
    var body = {
      city: city.value,
      province: province.value,
      address: address.value,
      postalCode: postalCode.value
    }
    updateUserData(body, onlineUser.id)
    navigation.navigate("RegisterFourty"); // coregir despues si le pefiefeo 
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate("RegisterSecond")} />

      <Logo />

      <Header>Create Account</Header>

      <DropDownPicker
        zIndex={5000}
        searchable={true}
        searchablePlaceholder="Search your province"
        placeholder='Province'
        items={listProvince}
        defaultValue={province.value}
        containerStyle={{ height: 50, width: 300 }}
        style={{ backgroundColor: '#fafafa' }}
        itemStyle={{
          justifyContent: 'flex-start'
        }}
        dropDownStyle={{ backgroundColor: '#fafafa' }}
        onChangeItem={item => setProvince(item)}
      />

      <DropDownPicker
        zIndex={4000}
        searchable={true}
        searchablePlaceholder="Search your city"
        placeholder='City'
        items={listCity}
        defaultValue={city.value}
        containerStyle={{ height: 50, width: 300, marginTop: 16 }}
        style={{ backgroundColor: '#fafafa' }}
        itemStyle={{
          justifyContent: 'flex-start'
        }}
        dropDownStyle={{ backgroundColor: '#fafafa' }}
        onChangeItem={item => setCity(item)}
      />

      <TextInput
        styleView={{ width: "150px" }}
        label="Address"
        returnKeyType="next"
        value={address.value}
        onChangeText={(text) => {setAddress({ value: text, error: "" }), setTimeout(function() {addressVerify(text)}), 500}}
        error={!!address.error}
        errorText={address.error}
      />

      <TextInput
        label="Postal code"
        returnKeyType="next"
        value={postalCode.value}
        onChangeText={(text) => setPostalCode({ value: text, error: "" })}
        error={!!postalCode.error}
        errorText={postalCode.error}
      />

      <Button mode="contained" onPress={_onSignUpPressed} style={styles.button}>
        Next
      </Button>

      <View style={styles.row}>
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
    updateUserData: (body, id) => dispatch(updateUserData(body, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterThird);
