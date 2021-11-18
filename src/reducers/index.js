import { combineReducers } from 'redux';

import userReducer from './userReducer';
import seriesReducer from './seriesReducer';
import userListsReducer from './userListsReducer';
import subscribeReducer from './subscribeReducer';

const rootReducer = combineReducers({
  user: userReducer,
  series: seriesReducer,
  userLists: userListsReducer,
  subscribeForm: subscribeReducer,
});

export default rootReducer;
