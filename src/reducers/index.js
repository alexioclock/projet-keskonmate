import { combineReducers } from 'redux';
import reducer from './reducer';
import genreFilter from './genreFilter';

const rootReducer = combineReducers({
  /* nom du tiroir : reducer qui s'occupe du tiroir */
  reducer: reducer,
  dropdownFilter: genreFilter,
});
export default rootReducer;
