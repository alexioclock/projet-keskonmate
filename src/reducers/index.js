import { combineReducers } from 'redux';

import reducer from './reducer';
import seriesReducer from './seriesReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  /* nom du tiroir : reducer qui s'occupe du tiroir */
  reducer: reducer,
  series: seriesReducer,
  user: userReducer,
});

export default rootReducer;
