import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import seriesMiddleware from 'src/middlewares/seriesMiddleware';
import logMiddleware from 'src/middlewares/logMiddleware';
import userlistMiddleware from 'src/middlewares/userlistMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    seriesMiddleware,
    userlistMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
