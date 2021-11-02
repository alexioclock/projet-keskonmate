import { combineReducers } from 'redux';

import reducer from './reducer';
import seriesReducer from './seriesReducer';

const rootReducer = combineReducers({
  /* nom du tiroir : reducer qui s'occupe du tiroir */
  reducer: reducer,
  series: seriesReducer,
});

export default rootReducer;
