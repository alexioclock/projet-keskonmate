import { TOGGLE_ADD_DROPDOWN_OPEN } from 'src/actions/actions';

const initialState = {
  // ici le state initial
  isAddDropdownOpen: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_ADD_DROPDOWN_OPEN:
    // on retourne un nouveau state
      return {
        // en déversant les informations du state actuel
        ...state,
        // et en appliquant des modifications
        isAddDropdownOpen: !state.isAddDropdownOpen,
      };

    default:
      return state;
  }
}

export default reducer;
