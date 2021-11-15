import axios from 'axios';
import {
  SUBMIT_LOGIN,
  FETCH_USER,
  successLogin,
  errorLogin,
  fetchUser,
  saveUser,
} from 'src/actions/login';
import { SUBMIT_INSCRIPTION } from 'src/actions/subscribeForm';
import { fetchUserlist } from 'src/actions/actions';

const logMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN: {
      const state = store.getState();
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
          store.dispatch(errorLogin());
        });
      break;
    }

    case FETCH_USER:
      axios.get(`http://keskonmate.me/api/v1/users/${action.userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveUser(response.data));
          store.dispatch(fetchUserlist(action.userId));
        })
        .catch((error) => {
          console.warn(error);
        });

      break;

    case SUBMIT_INSCRIPTION: {
      const state = store.getState();
      const newUser = {
        userNickname: state.subscribeForm.nicknameInput,
        password: state.subscribeForm.passwordInput,
        email: state.subscribeForm.emailInput,
      };
      console.log(newUser);
      axios.post(
        // URL
        'http://keskonmate.me/api/v1/users/add',
        newUser,
      )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.warn(error);
        });
      break;
    }

    default:
  }

  next(action);
};

export default logMiddleware;
