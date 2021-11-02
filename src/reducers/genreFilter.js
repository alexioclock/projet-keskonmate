import { FILTER_GENRE_SERIES } from 'src/actions/seriesFilter';
import dataGenres from "../utils/genres";
import dataSeries from "../utils/series";

const initialState = {
  // ici le state initial
    list:[dataSeries],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_GENRE_SERIES:
    // on retourne un nouveau state
      return {
        // en déversant les informations du state actuel
        ...state,
        // et en appliquant des modifications
        propriété_à_modifier_1: 'valeur',
        propriété_à_modifier_2: action.newValue,
      };

    default:
      return state;
  }
}

export default reducer;
