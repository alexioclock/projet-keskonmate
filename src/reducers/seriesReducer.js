import { SAVE_SERIES, SAVE_CURRENT_SERIES_DETAILS, SET_NOT_LOADING } from 'src/actions/series';
import { HANDLE_SEARCH_CHANGE, FILTER_SEARCHED_SERIES } from 'src/actions/actions';
import { SAVE_HOME_ORDER } from '../actions/seriesFilter';

const initialState = {
  // ici le state initial
  seriesList: [],
  searchedSerie: '',
  filteredSeries: [],
  filterBygenre: [],
  homeOrderList: [],
  showLoading: true,
};

function seriesReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_SERIES:
      return {
        ...state,
        seriesList: action.series,
      };

    case HANDLE_SEARCH_CHANGE:
      return {
        ...state,
        searchedSerie: action.value,
      };

    case SAVE_CURRENT_SERIES_DETAILS:
      return {
        ...state,
        currentSeriesDetails: action.currentSeriesDetails,
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

    case SAVE_HOME_ORDER:
      return {
        ...state,
        homeOrderList: action.homeOrder,
      };

    case SET_NOT_LOADING:
      return {
        ...state,
        showLoading: false,
      };
    default:
      return state;
  }
}

export default seriesReducer;
