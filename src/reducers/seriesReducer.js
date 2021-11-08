import { SAVE_SERIES, SAVE_CURRENT_SERIES_DETAILS } from 'src/actions/series';
// import seriesList from 'src/utils/series';

const initialState = {
  seriesList: [],
  currentSeriesDetails: [],
};

function seriesReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_SERIES:
      return {
        ...state,
        seriesList: action.series,
      };

    case SAVE_CURRENT_SERIES_DETAILS:
      return {
        ...state,
        currentSeriesDetails: action.currentSeriesDetails,
      };
    default:
      return state;
  }
}

export default seriesReducer;
