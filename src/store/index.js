import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers';
import seriesMiddleware from 'src/middlewares/seriesMiddleware';
import logMiddleware from 'src/middlewares/logMiddleware';
import userlistMiddleware from 'src/middlewares/userlistMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// on combine devTools avec les middlewares
const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    seriesMiddleware,
    userlistMiddleware,
  ),
);

const store = createStore(
  // reducers
  reducer,
  // enhancer
  enhancers,
);

export default store;
