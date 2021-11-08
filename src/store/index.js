import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers';
import middleware from 'src/middlewares/middleware';
import seriesMiddleware from 'src/middlewares/seriesMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// on combine devTools avec les middlewares
const enhancers = composeEnhancers(
  applyMiddleware(
    middleware, seriesMiddleware,
    // ... d'autres middlewares
  ),
);

const store = createStore(
  // reducers
  reducer,
  // enhancer
  enhancers,
);

export default store;
