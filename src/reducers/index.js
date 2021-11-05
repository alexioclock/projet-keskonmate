import { combineReducers } from 'redux';

import reducer from './reducer';

import userReducer from './userReducer';
import seriesReducer from './seriesReducer';
import cardReducer from './cardReducer';

const rootReducer = combineReducers({
  /* nom du tiroir : reducer qui s'occupe du tiroir */
  reducer: reducer,
  user: userReducer,
  series: seriesReducer,
  cards: cardReducer,
});

export default rootReducer;
