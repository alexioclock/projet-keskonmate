import { HANDLE_SEARCH_CHANGE, FILTER_SEARCHED_SERIES } from 'src/actions/actions';

import seriesList from 'src/utils/series';

const initialState = {
  // ici le state initial
  seriesList: seriesList,
  searchedSerie: '',
  filteredSeries: [],
};

function seriesReducer(state = initialState, action) {
  switch (action.type) {
    case HANDLE_SEARCH_CHANGE:
      return {
        // en déversant les informations du state actuel
        ...state,
        // et en appliquant des modifications
        searchedSerie: action.value,
      };

    case FILTER_SEARCHED_SERIES: {
      const newSeriesArray = [...state.seriesList];
      const newSeriesArrayFiltered = newSeriesArray.filter((serie) => {
        const currentTitleLowered = serie.title.toLowerCase();
        const inputSearchLowered = state.searchedSerie.toLowerCase();
        return currentTitleLowered.includes(inputSearchLowered);
      });
      return {
        // en déversant les informations du state actuel
        ...state,
        // et en appliquant des modifications
        filteredSeries: newSeriesArrayFiltered,
      };
    }

    default:
      return state;
  }
}

export default seriesReducer;
