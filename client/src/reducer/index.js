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
  DO_TRANSFER,
  GET_TRANSFERS_ALL,
  GET_ALL_ACCOUNTS,
  GET_BALANCE,
  FRIEND_CVU,
  ADD_FRIEND,
  DELETE_FRIEND,
  AMOUNT_LOAD,
  DO_LOAD,
  CARD,
  DO_PAYMENT,
  PAYMENT,
  LOGOUT
} from "../actions";

const initialState = {
  users: [],
  onlineUser: {},
  userRegister: {},
  contacts: [],
  account: {},
  transfer: {},
  transfersAll: [],
  balance: {},
  accounts: {},
  balance: {},
  friendCVU: [],
  amount: {},
  payment: {},
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
    case DO_TRANSFER:
      return {
        ...state,
        transfer: action.payload,
        transfersAll: [action.payload.transfer, ...state.transfersAll],
        balance: state.balance.balance - action.payload.transfer.Quantity
      }
    case GET_TRANSFERS_ALL:
      return {
        ...state,
        transfersAll: action.payload
      }
    case GET_BALANCE:
      return {
        ...state,
        balance: action.payload
      }
    case GET_ALL_ACCOUNTS:
      return {
        ...state,
        accounts: action.payload
      }
    case FRIEND_CVU:
      return {
        ...state,
        friendCVU: action.payload
      }
    case ADD_FRIEND:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      }
    case DELETE_FRIEND:
      return {
        ...state,
        contacts: state.contacts.filter(c => c.id != action.payload.id) //seguir con esto jaja
      }
    case AMOUNT_LOAD:
      return {
        ...state,
        amount: action.payload
      }
    case DO_LOAD:
      return {
        ...state,
        transfersAll: [action.payload, ...state.transfersAll]
      }
    case CARD: 
      if (action.payload !== 'inactive' && action.payload !== 'active') return {...state};
      return {
        ...state,
       account: {...state.account, state: action.payload }
      }
    case DO_PAYMENT:
      return {
        ...state,
        transfersAll: [action.payload, ...state.transfersAll],
        balance: state.balance.balance - action.payload.Quantity
      }
    case PAYMENT:
      return {
        ...state,
        payment: action.payload
      }
    case LOGOUT:
      return {
        ...state,
        onlineUser: {}
      }
    default:
      return state;
  }

};

export default reducer;
