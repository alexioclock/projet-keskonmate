import {
  SET_INPUT_NICKNAME,
  SET_EMAIL_INPUT,
  SET_PASSWORD_INPUT,
  SET_CONFIRM_PASSWORD_INPUT,
  OPEN_LOGIN_FORM,
} from 'src/actions/subscribeForm';

const initialState = {
  // ici le state initial
  nicknameInput: '',
  emailInput: '',
  passwordInput: '',
  confirmPasswordInput: '',
  isRegistered: false,
  isLoginFormOpened: false,
};

function subscribeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_INPUT_NICKNAME:
      return {
        ...state,
        nicknameInput: action.value,
      };

    case SET_EMAIL_INPUT:
      return {
        ...state,
        emailInput: action.value,
      };

    case SET_PASSWORD_INPUT:
      return {
        ...state,
        passwordInput: action.value,
      };

    case SET_CONFIRM_PASSWORD_INPUT:
      return {
        ...state,
        confirmPasswordInput: action.value,
      };

    case OPEN_LOGIN_FORM:
      return {
        ...state,
        isLoginFormOpened: !state.isLoginFormOpened,
      };

    default:
      return state;
  }
}

export default subscribeReducer;
