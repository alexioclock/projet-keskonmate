import axios from 'axios';
import { FETCH_SERIES, saveSeries } from '../actions/series';

const seriesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_SERIES:
      axios.get('http://keskonmate.me/api/v1/series')
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveSeries(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default seriesMiddleware;
