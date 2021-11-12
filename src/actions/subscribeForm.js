export const SET_INPUT_NICKNAME = 'SET_INPUT_NICKNAME';
export const SET_EMAIL_INPUT = 'SET_EMAIL_INPUT';
export const SET_PASSWORD_INPUT = 'SET_PASSWORD_INPUT';
export const SET_CONFIRM_PASSWORD_INPUT = 'SET_CONFIRM_PASSWORD_INPUT';
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
export const OPEN_LOGIN_FORM = 'OPEN_LOGIN_FORM';

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
export const setConfirmPasswordInput = (newValue) => ({
  type: SET_CONFIRM_PASSWORD_INPUT,
  value: newValue,
});

export const openLoginForm = () => ({
  type: OPEN_LOGIN_FORM,
});
