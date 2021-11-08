import { SAVE_SERIES } from 'src/actions/series';
// import seriesList from 'src/utils/series';

const initialState = {
  seriesList: [],
};

function seriesReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_SERIES:
      return {
        ...state,
        seriesList: action.series,
      };

    default:
      return state;
  }
}

export default seriesReducer;
