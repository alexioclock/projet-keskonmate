
import { 
  SET_INPUT_NICKNAME, 
  SET_EMAIL_INPUT, 
  SET_PASSWORD_INPUT, 
  SET_CONFIRM_PASSWORD_INPUT 
    } from 'src/actions/suscribeForm';

const initialState = {
  // ici le state initial

    nicknameInput: '',
    emailInput: '',
    passwordInput: '',
    confirmPasswordInput: '',

};

function suscribeReducer (state = initialState, action) {
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
        }
          
        


    default:
      return state;
  }
}

export default suscribeReducer;
