import { SAVE_SERIES, SAVE_CURRENT_SERIES_DETAILS } from 'src/actions/series';
import { HANDLE_SEARCH_CHANGE, FILTER_SEARCHED_SERIES } from 'src/actions/actions';
import { FILTER_BY_GENRE } from '../actions/seriesFilter';
import { SET_ALPHABETICAL_FILTER } from '../actions/seriesFilter';

const initialState = {
  // ici le state initial
  seriesList: [],
  searchedSerie: '',
  filteredSeries: [],
  filterBygenre: [],
};

const compare = function (a, b) {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
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


    case SET_ALPHABETICAL_FILTER: {
      const newSeriesArray = [...state.seriesList];
      const newSeriesArraySort = newSeriesArray.sort(compare);
      return {
        ...state,
        seriesList: newSeriesArraySort,
      };
    }

    case FILTER_BY_GENRE: {
      const newSeriesArray = [...state.seriesList];
      const newSeriesArrayByGenre = newSeriesArray.filter((serie) => {
        const serieGenre = serie.genre;
        const genreFilter = action.genre;
        
        serieGenre.forEach((element) => {
            return  element.includes(element.includes(genreFilter));
        });
        
        console.log(element)

      });
      return {
        ...state,
        filteredSeries: newSeriesArrayByGenre,
       };
    }
    
    default:
      return state;
  }
}

export default seriesReducer;
