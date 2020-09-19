// import React from "react";
// import { connect } from "react-redux";
import moment from 'moment';
moment().format();

export const emailValidator = (email,state) => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return "Email cannot be empty.";
  if (!re.test(email)) return "Ooops! We need a valid email address.";
  return "";
};

export const passwordValidator = (password) => {
  const re = /^([a-zA-Z0-9@*#]{8,15})$/;
  if (!password || password.length <= 0) return "Password cannot be empty.";
  if (!re.test(password)) return "The password must have 8 characters and be alphanumeric "
  return "";
};


export const confirmPasswordValidator = (password, confirmPassword) => {
  
  if (!confirmPassword || confirmPassword.length <= 0)
    return "Please confirm your password.";
  if (password !== confirmPassword) return "Passwords do not match.";
  return "";
};


export const nameValidator = (name) => {
  
  if (!name || name.length <= 0) return "Name cannot be empty."
    return ""
}

export const surnameValidator = (surname) => {
  
  if (!surname || surname.length <= 0) return "Surname cannot be empty."
    return ""
}

export const usernameValidator = (username) => {
  
  if (!username || username.length <= 0) return "Username cannot be empty."
    return ""
}

export const activeValidator = (code, onlinecode) => {
  
  if (code != onlinecode) return "The activation code is wrong"
    return ""
}

export const addressValidator = (address) => {
  if (!address && address.length == 0) return "Address cannot be empty.";
  if (address.length == 0) return 'Street not found'
  return "";
};


export const provinceValidator = (province) => {
  
  if (!province || province.length == 0) return "Province cannot be empty."
    return ""
}

export const cityValidator = (city) => {
  
  if (!city || city.length == 0) return "City cannot be empty."
    return ""
}

export const postalCodeValidator = (postalCode) => {
  
  var reg = new RegExp("^[0-9]+$");
  if (!postalCode || postalCode.length == 0)
    return "Postal Code cannot be empty."
  if (!reg.test(postalCode)) return "Ooops! Postal Code must be a number."
    return ""
}

export const dniValidator = (dni) => {

  var ex_regular_dni
  ex_regular_dni = /^\d{8}(?:[-\s]\d{4})?$/
  if (!dni) return "DNI cannot be empty."
  if(ex_regular_dni.test (dni) == true){
       return ""
  }else{
     return('Sorry, You DNI is invalid.')
   }
}

export const phoneValidator = (phone) => {
  
  var found = phone.search(/^(\+{1}\d{2,3}\s?[(]{1}\d{1,3}[)]{1}\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}$/)
  if (!phone) return "Phone cannot be empty."
  if(found > -1) {
        return ""
    }
    else {
        return "Sorry, You phone is invalid."
    }
}

export const birthDateValidator = (birthDate) => {

  var sixteenYearsAgo = moment().subtract(16, "years")
  var birthday = moment(birthDate)
  if (!birthDate) return "Birth Date cannot be empty."
    if (!birthday.isValid()) {
        return "Invalid date. ¡Example! Month/Day/Year OR Month-Day-Year"  
    }
    else if (sixteenYearsAgo.isAfter(birthday)) {
        return ""  
    }
    else {
        return "Sorry, You have to be over 16 years old."   
    }
}

export const validatePIN = (pin) => {
  
  if (pin.length === 0) return "PIN cannot be empty."
  if (pin.length > 6) return "The pin must not exceed six numbers."
  if (pin.length !== 6) return "The pin must be 6 numbers."
  return ""
}