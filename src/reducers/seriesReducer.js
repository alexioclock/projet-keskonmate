import { SAVE_SERIES, SAVE_CURRENT_SERIES_DETAILS } from 'src/actions/series';
import { HANDLE_SEARCH_CHANGE, FILTER_SEARCHED_SERIES } from 'src/actions/actions';
import { FILTER_BY_GENRE } from '../actions/seriesFilter';

const initialState = {
  // ici le state initial
  seriesList: [],
  searchedSerie: '',
  filteredSeries: [],
  filterBygenre: [],

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

    // case FILTER_BY_GENRE: {
    //   const newSeriesArray = [...state.seriesList];
    //   const FilteredByGenre = newSeriesArray.filter((serie) => {
    //     const filter = serie.genre === action.genre,
    //   });
    //   return {
    //     ...state, 
    //     filteredSeries: filter,
        
    //   };
    // }

    default:
      return state;
  }
}

export default seriesReducer;
