import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers';
import middleware from 'src/middlewares/middleware';
import seriesMiddleware from 'src/middlewares/seriesMiddleware';
import logMiddleware from 'src/middlewares/logMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// on combine devTools avec les middlewares
const enhancers = composeEnhancers(
  applyMiddleware(
    seriesMiddleware,
    middleware,
    logMiddleware,
  ),
);

const store = createStore(
  // reducers
  reducer,
  // enhancer
  enhancers,
);

export default store;
