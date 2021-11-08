// === action types
export const DO_SOMETHING = 'DO_SOMETHING';
export const LOG_IN = 'LOG_IN';
export const TOGGLE_ADD_DROPDOWN_OPEN = 'TOGGLE_ADD_DROPDOWN_OPEN';

// === action creators
export const doSomething = (/* newValue */) => ({
  type: DO_SOMETHING,
  /* value: newValue, */
});

// export const logIn = (/* newValue */) => ({
//   type: LOG_IN,
//   /* value: newValue, */
// });
export const toggleAddDropdownOpen = () => ({
  type: TOGGLE_ADD_DROPDOWN_OPEN,
});

