export const SET_NICKNAME = 'SET_NICKNAME';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
export const LOG_OUT = 'LOG_OUT';
export const ERROR_LOGIN = 'ERROR_LOGIN';
export const FETCH_USER = 'FETCH_USER';
export const SAVE_USER = 'SAVE_USER';

export const setNickname = (newValue) => ({
  type: SET_NICKNAME,
  value: newValue,
});

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

export const errorLogin = (errorMessage) => ({
  type: ERROR_LOGIN,
  errorMessage: errorMessage,
});

export const fetchUser = (userId) => ({
  type: FETCH_USER,
  userId: userId,
});

export const saveUser = (userInfos) => ({
  type: SAVE_USER,
  userInfos: userInfos,
});
