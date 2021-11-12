import {
  SET_PASSWORD, SET_NICKNAME, SUCCESS_LOGIN, LOG_OUT, ERROR_LOGIN, SAVE_USER,
} from 'src/actions/login';

const initialState = {
  currentUser: {},
  nicknameLogin: '',
  passwordLogin: '',
  isError: false,
  isConnected: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NICKNAME:
      return {
        ...state,
        nicknameLogin: action.value,
      };
    case SET_PASSWORD:
      return {
        ...state,
        passwordLogin: action.value,
      };

    case SUCCESS_LOGIN:
      return {
        ...state,
        isConnected: true,
        nickname: action.nicknameLogin,
      };

    case LOG_OUT:
      return {
        ...state,
        isConnected: false,
      };

    case ERROR_LOGIN:
      return {
        ...state,
        isError: true,
      };

    case SAVE_USER:
      return {
        ...state,
        currentUser: action.userInfos,
      };
    default:
      return state;
  }
}

export default userReducer;
