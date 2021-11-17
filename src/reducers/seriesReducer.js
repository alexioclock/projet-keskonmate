import {
  SAVE_SERIES,
  SAVE_CURRENT_SERIES_DETAILS,
  SET_NOT_LOADING,
  SAVE_FILTERED_SERIES,
} from 'src/actions/series';
import { HANDLE_SEARCH_CHANGE } from 'src/actions/actions';
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

    case SAVE_FILTERED_SERIES:
      return {
        ...state,
        filteredSeries: action.series,
      };

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
