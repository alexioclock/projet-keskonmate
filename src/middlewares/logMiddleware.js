import axios from 'axios';
import { SUBMIT_LOGIN, successLogin, errorConnexion } from 'src/actions/login';

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

          localStorage.setItem("token", token);

          const actionSuccess = successLogin(response.data.nickname);
          store.dispatch(actionSuccess);
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
