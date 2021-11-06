import axios from 'axios';
import { SUBMIT_LOGIN, successLogin } from 'src/actions/login';

const logMiddleware = (store) => (next) => (action) => {
 

  switch (action.type) {
    case SUBMIT_LOGIN:

      axios.post(
        // URL
        'http://keskonmate.me/api/v1/users',
        {
          nickname: store.getState().user.nicknameLogin,
          password: store.getState().user.nicknamePassword,
        },
      )
        .then((response) => {
          console.log(response);
          const actionSuccess = successLogin(response.data);
          store.dispatch(actionSuccess);
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
