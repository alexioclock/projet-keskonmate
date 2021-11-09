import axios from 'axios';
import {
  SUBMIT_LOGIN,
  FETCH_USER,
  FETCH_USERLIST,
  successLogin,
  errorConnexion,
  fetchUserlist,
} from 'src/actions/login';

const logMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      const state = store.getState();
      axios.post(
        // URL
        'http://keskonmate.me/api/login',
        {
          // username: state.user.nicknameLogin,
          // password: state.user.passwordLogin,
          username: "tux@keskonmate.io",
          password: "admin",

        },
      )
        .then((response) => {
          console.log(response);

          const token = response.data.token;
          const userId = 1;

          localStorage.setItem("token", token);

          store.dispatch(successLogin());
          store.dispatch(fetchUser(userId));
          store.dispatch(fetchUserlist());
        })
        .catch((error) => {
          console.warn(error);
          store.dispatch(errorConnexion());
        });

    break;

    case FETCH_USER:
      const state = store.getState();
      axios.get(
        // URL
        'http://keskonmate.me/api/login',
        {
          // username: state.user.nicknameLogin,
          // password: state.user.passwordLogin,
          username: "tux@keskonmate.io",
          password: "admin",

        },
      )
        .then((response) => {
          console.log(response);

          const token = response.data.token;

          localStorage.setItem("token", token);

          const actionSuccess = successLogin(response.data.nickname);
          store.dispatch(actionSuccess);
          store.dispatch(fetchUserlist);
        })
        .catch((error) => {
          console.warn(error);
          store.dispatch(errorConnexion);
        });

    break;


    case FETCH_USERLIST:
      const state = store.getState();
      axios.get(
        // URL
        'http://keskonmate.me/api/login',
        {
          // username: state.user.nicknameLogin,
          // password: state.user.passwordLogin,
          username: "tux@keskonmate.io",
          password: "admin",

        },
      )
        .then((response) => {
          console.log(response);

          const token = response.data.token;

          localStorage.setItem("token", token);

          const actionSuccess = successLogin(response.data.nickname);
          store.dispatch(actionSuccess);
          store.dispatch(fetchUserlist);
        })
        .catch((error) => {
          console.warn(error);
          store.dispatch(errorConnexion);
        });

    break;

    default:
  }

  next(action);
};

export default logMiddleware;
