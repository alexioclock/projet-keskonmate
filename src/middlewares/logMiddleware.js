import axios from 'axios';
import {
  SUBMIT_LOGIN,
  FETCH_USER,
  successLogin,
  errorConnexion,
  fetchUser,
  saveUser,
} from 'src/actions/login';
import { fetchUserlist } from 'src/actions/actions';

const logMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      // const state = store.getState();
      axios.post(
        // URL
        'http://keskonmate.me/api/login',
        {
          // username: state.user.nicknameLogin,
          // password: state.user.passwordLogin,
          username: 'admin@keskonmate.me',
          password: 'admin',

        },
      )
        .then((response) => {
          const { token, userId } = response.data;

          localStorage.setItem('token', token);

          store.dispatch(successLogin());
          store.dispatch(fetchUser(userId));
        })
        .catch((error) => {
          console.warn(error);
          store.dispatch(errorConnexion());
        });

      break;

    case FETCH_USER:
      axios.get(`http://keskonmate.me/api/v1/users/${action.userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
        .then((response) => {
          store.dispatch(saveUser(response.data));
          store.dispatch(fetchUserlist(action.userId));
        })
        .catch((error) => {
          console.warn(error);
        });

      break;

    default:
  }

  next(action);
};

export default logMiddleware;
