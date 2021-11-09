import {
  SET_PASSWORD,
  SET_NICKNAME,
  SUCCESS_LOGIN,
  LOG_OUT,
  ERROR_CONNEXION,
  SAVE_USER,
} from 'src/actions/login';

const initialState = {
  currentUser: {},
  nicknameLogin: '',
  passwordLogin: '',
  errorConnexion: false,
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
      };

    case LOG_OUT:
      return {
        ...state,
        isConnected: false,
      };

    case ERROR_CONNEXION:
      return {
        ...state,
        errorConnexion: true,
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
