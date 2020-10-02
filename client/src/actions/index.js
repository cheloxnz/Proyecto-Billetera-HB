import axios from "axios";
export const ip = '192.168.0.101'

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
export const DO_TRANSFER = 'DO_TRANSFER';
export const GET_BALANCE = 'GET_BALANCE';
export const GET_TRANSFERS_ALL = "GET_TRANSFERS_ALL";
export const GET_ALL_ACCOUNTS = "GET_ALL_ACCOUNTS";
export const FRIEND_CVU = 'FRIEND_CVU';
export const ADD_FRIEND = 'ADD_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const AMOUNT_LOAD = "AMOUNT_LOAD";
export const DO_LOAD = "DO_LOAD";
export const CARD = 'CARD';
export const DO_PAYMENT = 'DO_PAYMENT';
export const PAYMENT = 'PAYMENT';
export const LOGOUT = 'LOGOUT'



export function registerUser(email, password) {
  return function (dispatch) {
    return axios
      .post(`http://${ip}:3005/users/register`, { email, password })
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
      .post(`http://${ip}:3005/users/login`, body)
      .then((result) => result.data)
      .then((data) => {
        dispatch({ type: LOGIN_USER, payload: data });
      });
  };
}

export function getAllUsers() {
  return function (dispatch) {
    return axios
      .get(`http://${ip}:3005/users/all`)
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
  return function (dispatch) {
    return axios
      .put(`http://${ip}:3005/users/${id}`, body)
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
      .put(`http://${ip}:3005/users/activeUser/${id}`)
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
      .post(`http://${ip}:3005/accounts/${id}`)
      .then(result => result.data)
      .then(account => {
        dispatch({
          type: CREATE_ACCOUNT,
          payload: account
        })
      })
  }
}

export function postSendEmail(value) {
  return function (dispatch) {
    return axios
      .post(`http://${ip}:3005/send-email`, value)
  }
}

export function setPinUser(idUser, pin) {
  return function (dispatch) {
    return axios
      .put(`http://${ip}:3005/users/updatePin/${idUser}`, { pin: pin })
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
      .get(`http://${ip}:3005/contacts/user/${id}`)
      .then((result) => result.data.friends)
      .then((friends) => {
        dispatch({
          type: GET_ALL_CONTACTS,
          payload: friends
        })
      })
  }
}

export function getAccount(id) {
  return function (dispatch) {
    return axios
      .get(`http://${ip}:3005/accounts/${id}`)
      .then((result) => result.data)
      .then((data) => {
        dispatch({
          type: GET_ACCOUNT,
          payload: data
        })
      })
  }
}


export function doTransfer(CVUFrom, cvu, amount) {
  return function (dispatch) {
    return axios
      .post(`http://${ip}:3005/transfers/${CVUFrom}`, { cvu, amount })
      .then((result) => result.data)
      .then((data) => {
        dispatch({
          type: DO_TRANSFER,
          payload: data
        })
      })
  }
}


export function getTransfersAll(Naccount) {
  return function (dispatch) {
    return axios
      .get(`http://${ip}:3005/transfers/all/${Naccount}`)
      .then((result) => result.data)
      .then((data) => {
        dispatch({
          type: GET_TRANSFERS_ALL,
          payload: data
        })
      })
  }
}

export function getBalance(id) {
  return function (dispatch) {
    return axios
      .get(`http://${ip}:3005/accounts/balance/${id}`)
      .then((result) => result.data)
      .then((data) => {
        dispatch({
          type: GET_BALANCE,
          payload: data
        })
      })
  }
}

export function getAllAccounts() {
  return function (dispatch) {
    return axios
      .get(`http://${ip}:3005/accounts/`)
      .then((result) => result.data)
      .then((data) => {
        dispatch({
          type: GET_ALL_ACCOUNTS,
          payload: data
        })
      })
  }
}

export function friendCVU(cvu) {
  return function (dispatch) {
    dispatch({
      type: FRIEND_CVU,
      payload: cvu
    })
  }
}

export function deleteFriend(userId, id) {
  return function (dispatch) {
    axios
      .delete(`http://${ip}:3005/contacts/user/${userId}/delete/${id}`)
      .then(res => res.data)
      .then(data => {
        dispatch({
          type: DELETE_FRIEND,
          payload: data
        })
      })
  }
}

export function addFriend(id, username) {
  return function (dispatch) {
    axios
      .post(`http://${ip}:3005/contacts/user/${id}/add`, { username })
      .then(res => res.data)
      .then(data => {
        dispatch({
          type: ADD_FRIEND,
          payload: data
        })
      })
  }
}
export function amountLoad(amount, sucursal) {
  var obj = { amount, sucursal }
  return function (dispatch) {
    dispatch({
      type: AMOUNT_LOAD,
      payload: obj,
    })
  }
}
export function doLoad(amount, sucursal, dni, code) {
  var load = { amount, sucursal, dni, code }
  return function (dispatch) {
    axios
      .post(`http://${ip}:3005/transfers/user/load`, { load })
      .then(res => res.data)
      .then(data => {
        dispatch({
          type: DO_LOAD,
          payload: data
        })
      })
  }
}

export function cardState(cvu, id, estado) {
  return function (dispatch) {
    axios
      .put(`http://${ip}:3005/accounts/${cvu}`, { id, estado })
      .then(res => res.data)
      .then(data => {
        dispatch({
          type: CARD,
          payload: data
        })
      })
  }
}

export function doPayment(amount, service, dni) {
  return function (dispatch) {
    return axios
      .post(`http://${ip}:3005/transfers/user/payment`, { amount, service, dni })
      .then((result) => result.data)
      .then((data) => {
        dispatch({
          type: DO_PAYMENT,
          payload: data
        })
      })
  }
}

export function payment(service) {
  return function (dispatch) {
    dispatch({
      type: PAYMENT,
      payload: service
    })
  }
}

export function logout () {
  return function (dispatch) {
    return axios
        .post(`http://${ip}:3005/users/auth/logout`, null, {withCredentials: true})
        .then(() => {
          dispatch({
            type: LOGOUT,
          })
        })
  }
}