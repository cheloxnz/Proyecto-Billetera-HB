import axios from "axios";

// CONSTANTES DE LAS ACTIONS
export const REGISTER_USER = "REGISTER_USER";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const LOGIN_USER = "LOGIN_USER";
export const ACTIVE_USER = "ACTIVE_USER";
export const VERIFY_CODE = "VERIFY_CODE";
export const SET_PIN_USER = "SET_PIN_USER";
export const UPDATE_USER = 'UPDATE_USER'
export const CREATE_ACCOUNT = 'CREATE_ACCOUNT'
export const GET_ALL_CONTACTS = 'GET_ALL_CONTACTS';
export const GET_ACCOUNT = 'GET_ACCOUNT';



export function registerUser(email, password) {
  return function (dispatch) {
    return axios
      .post("http://localhost:3005/users/register", { email, password })
      .then((result) => result.data)
      .then((data) => {
        dispatch({
          type: REGISTER_USER,
          payload: data,
        });
      })
      .catch(err => console.log(err))
  };
}

export function loginUser(email, password) {
  var body = {
    email,
    password
  }
  return function (dispatch) {
    return axios
      .post(`http://localhost:3005/users/login`, body)
      .then((result) => result.data)
      .then((data) => {
        dispatch({ type: LOGIN_USER, payload: data });
      });
  };
}

export function getAllUsers() {
  return function (dispatch) {
    return axios
      .get("http://localhost:3005/users")
      .then((result) => result.data)
      .then((data) => {
        dispatch({
          type: GET_ALL_USERS,
          payload: data,
        });
      });
  };
}

export function updateUserData(body, id) {
  console.log( body + '       ' + id)
  return function (dispatch) {
    return axios
    .put(`http://localhost:3005/users/${id}`, body)
    .then(result => result.data)
    .then((data) => {
      dispatch({
        type: UPDATE_USER,
        payload: data
      })
    })
  }
}


export function activeUser(id) {
  return function (dispatch) {
    return axios
      .put(`http://localhost:3005/users/activeUser/${id}`)
      .then((result) => result.data)
      .then((data) => {
        dispatch({
          type: ACTIVE_USER,
          payload: data,
        });
      });
  };
}

export function createAccount(id) {
  return function (dispatch) {
    return axios
    .post(`http://localhost:3005/accounts/${id}`)
    .then( result => result.data )
    .then( account => {
      dispatch({
        type: CREATE_ACCOUNT,
        payload: account
      })
    })
  }
}

export function postSendEmail(value) {
  console.log(value)
  return function (dispatch) {
    return axios
      .post("http://localhost:3005/send-email", value)
  }
}

export function setPinUser(idUser, pin) {
  return function (dispatch) {
    return axios
      .put(`http://localhost:3005/users/updatePin/${idUser}`, { pin: pin })
      .then(() => {
        dispatch({
          type: SET_PIN_USER,
        })
      });
  }
};


export function getAllContacts(id) {
  return function (dispatch) {
    return axios
    .get(`http://localhost:3005/users/${id}`)
    .then((result) => console.log(result.data.friends))
    .then((data) => {
      dispatch({
        type: GET_ALL_CONTACTS,
        payload: data
      })
    })
  }
}

export function getAccount(id) {
  return function (dispatch) {
    return axios
    .get(`http://localhost:3005/accounts/${id}`)
    .then((result) => result.data)
    .then((data) => {
      dispatch({
        type: GET_ACCOUNT,
        payload: data
      })
    })
  }
}
