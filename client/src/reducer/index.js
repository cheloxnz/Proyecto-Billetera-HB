import {
  GET_ALL_USERS,
  REGISTER_USER,
  LOGIN_USER,
  ACTIVE_USER,
  VERIFY_CODE,
  SET_PIN_USER,
  UPDATE_USER,
  GET_ALL_CONTACTS,
  GET_ACCOUNT,
  CREATE_ACCOUNT,
} from "../actions";

const initialState = {
  users: [],
  onlineUser: {},
  userRegister: {},
  contacts: {},
  account: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case LOGIN_USER:
      console.log(action.payload);
      return {
        ...state,
        onlineUser: action.payload,
      };
    case REGISTER_USER:
      console.log(action.payload);
      return {
        ...state,
        onlineUser: action.payload,
      };
    case ACTIVE_USER:
      return {
        ...state,
        onlineUser: action.payload,
      };
    case UPDATE_USER:
      return {
        ...state,
        onlineUser: action.payload
      }
    case VERIFY_CODE:
      return {
        ...state,
        userRegister: action.payload
      }
    case SET_PIN_USER:
      return state;

    case CREATE_ACCOUNT:
      return {
        ...state,
        account: action.account
      }
    case GET_ALL_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      }
    case GET_ACCOUNT:
      return {
        ...state,
        account: action.payload
      }
    default:
      return state;
  }
};

export default reducer;
