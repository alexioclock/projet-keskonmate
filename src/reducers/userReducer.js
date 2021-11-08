import usersData from 'src/utils/users';
import { SET_PASSWORD, SET_NICKNAME, SUCCESS_LOGIN, LOG_OUT, ERROR_CONNEXION } from 'src/actions/login';
import { errorConnexion } from '../actions/login';

const initialState = {
  user: usersData[0],
  nicknameLogin: '',
  passwordLogin: '',
  errorConnexion: false,
  isConnected: true,

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
        }

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

        case ERROR_CONNEXION:
        return {
          ...state,
          errorConnexion: true,
        };


    default:
      return state;
  }
}

export default userReducer;
