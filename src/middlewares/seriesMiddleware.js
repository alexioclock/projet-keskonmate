import axios from 'axios';
import {
  FETCH_SERIES,
  FIND_SERIES,
  saveSeries,
  saveCurrentSeriesDetails,
} from '../actions/series';

const seriesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_SERIES:
      axios.get('http://keskonmate.me/api/v1/series')
        .then((response) => {
          store.dispatch(saveSeries(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });

      break;

    case FIND_SERIES:
      axios.get(`http://keskonmate.me/api/v1/series/${action.slug}`)
        .then((response) => {
          console.log(response);
          store.dispatch(saveCurrentSeriesDetails(response.data));
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
