export const SET_INPUT_NICKNAME = 'SET_INPUT_NICKNAME';
export const SET_EMAIL_INPUT = 'SET_EMAIL_INPUT';
export const SET_PASSWORD_INPUT = 'SET_PASSWORD_INPUT';
export const SET_CONFIRM_PASSWORD_INPUT= 'SET_CONFIRM_PASSWORD_INPUT';
export const SUCCESS_SUSCRIBE= 'SUCCESS_SUSCRIBE';


// === action creators
export const setInputNickname = (newValue) => ({
  type: SET_INPUT_NICKNAME,
  value: newValue,
});



// === action creators
export const setEmailInput = (newValue) => ({
  type: SET_EMAIL_INPUT,
  value: newValue,
});


// === action creators
export const setPasswordInput = (newValue) => ({
  type: SET_PASSWORD_INPUT,
  value: newValue,
});


// === action creators
export const successSuscribe = () => ({
  type: SUCCESS_SUSCRIBE,
});

