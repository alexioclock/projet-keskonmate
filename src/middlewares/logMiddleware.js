import axios from 'axios';
import {
  SUBMIT_LOGIN,
  FETCH_USER,
  successLogin,
  errorConnexion,
  fetchUser,
  saveUser,
  saveUserlist,
} from 'src/actions/login';

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
          username: "front@keskonmate.me",
          password: "front",

        },
      )
        .then((response) => {
          const { token, userId } = response.data;

          console.log(response.data);

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
          console.log(response);

          store.dispatch(saveUser(response.data));
          store.dispatch(saveUserlist(response.data.userlist));
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
