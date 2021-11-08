import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers';
import middleware from 'src/middlewares/middleware';
import logMiddleware from 'src/middlewares/logMiddleware';



// on combine devTools avec les middlewares
const enhancers = composeWithDevTools(
  applyMiddleware(
    middleware,
    logMiddleware,
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
