import axios from 'axios';
import { UPDATE_API_USERLIST } from 'src/actions/actions';

const userlistMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case UPDATE_API_USERLIST: {
      const { userLists } = store.getState().userLists;
      console.log(userLists);

      axios.put(
        // URL
        'http://keskonmate.me/api/v1/userlists',
        { userLists },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
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

  // on passe l'action au suivant (userlistMiddleware suivant ou reducer)
  next(action);
};

export default userlistMiddleware;
