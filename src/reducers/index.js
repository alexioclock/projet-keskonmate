import { combineReducers } from 'redux';
import genreFilter from './genreFilter';
import userReducer from './userReducer';
import seriesReducer from './seriesReducer';
import cardReducer from './cardReducer';
import userListsReducer from './userListsReducer';
import suscribeReducer from './suscribeReducer';

const rootReducer = combineReducers({
  /* nom du tiroir : reducer qui s'occupe du tiroir */
  dropdownFilter: genreFilter,
  user: userReducer,
  series: seriesReducer,
  cards: cardReducer,
  userLists: userListsReducer,
  suscribeForm: suscribeReducer,
});

export default rootReducer;
