export const SET_NICKNAME = 'SET_NICKNAME';
export const SET_PASSWORD = 'SET_PASSWORD';

// === action creators
export const setNickname = (newValue) => ({
  type: SET_NICKNAME,
  value: newValue,
});

// === action creators
export const setPAssword = (newValue) => ({
  type: SET_PASSWORD,
  value: newValue,
});
