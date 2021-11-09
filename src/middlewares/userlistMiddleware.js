import axios from 'axios';
import { ADD_SERIE_TO_API_USERLIST, EDIT_SERIE_TO_API_USERLIST, DELETE_SERIE_TO_API_USERLIST } from 'src/actions/actions';

const userlistMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_SERIE_TO_API_USERLIST: {
      const { currentSerieId, currentSerieType } = store.getState().userLists;
      const { currentUser } = store.getState().user;
      const newUserLists = {
        users_id: currentUser.id,
        series_nb: currentSerieId,
        type: currentSerieType,
        series_id: currentSerieId,
      };

      console.log(newUserLists);

      axios.post(
        // URL
        'http://keskonmate.me/api/v1/userlists',
        { newUserLists },
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

    case EDIT_SERIE_TO_API_USERLIST: {
      const { currentSerieType, currentUserlistId } = store.getState().userLists;
      const newUserLists = {
        type: currentSerieType,
      };

      console.log(newUserLists);

      axios.put(
        // URL
        `http://keskonmate.me/api/v1/userlists/${currentUserlistId}`,
        { newUserLists },
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

    case DELETE_SERIE_TO_API_USERLIST: {
      const { currentUserlistId } = store.getState().userLists;

      axios.delete(
        // URL
        `http://keskonmate.me/api/v1/userlists/${currentUserlistId}`,
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
