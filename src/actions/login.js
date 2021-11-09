export const SET_NICKNAME = 'SET_NICKNAME';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
export const LOG_OUT = 'LOG_OUT';
export const ERROR_CONNEXION = 'ERROR_CONNEXION';
export const FETCH_USER = 'FETCH_USER';
export const SAVE_USER = 'SAVE_USER';

// === action creators
export const setNickname = (newValue) => ({
  type: SET_NICKNAME,
  value: newValue,
});

// === action creators
export const setPassword = (newValue) => ({
  type: SET_PASSWORD,
  value: newValue,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const successLogin = () => ({
  type: SUCCESS_LOGIN,
});

export const logout = () => ({
  type: LOG_OUT,
});

export const errorConnexion = () => ({
  type: ERROR_CONNEXION,
});

export const fetchUser = (userId) => ({
  type: FETCH_USER,
  userId: userId,
});

export const saveUser = () => ({
  type: SAVE_USER,
});
