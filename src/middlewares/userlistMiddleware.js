import axios from 'axios';
import { ADD_SERIE_TO_API_USERLIST, EDIT_SERIE_TO_API_USERLIST, DELETE_SERIE_TO_API_USERLIST } from 'src/actions/actions';

const userlistMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_SERIE_TO_API_USERLIST: {
      const { currentSerieId, currentSerieType, currentUserlistId } = store.getState().userLists;
      const { currentUser } = store.getState().user;
      const newUserLists = {
        id: currentUserlistId,
        seasonNb: 0,
        seriesNb: currentSerieId,
        episodeNb: 0,
        createdAt: '2021-10-27T15:31:06+02:00',
        updatedAt: null,
        type: currentSerieType,
        series: currentSerieId,
        users: currentUser.id,
      };

      console.log(newUserLists);

      axios.post(
        // URL
        'http://keskonmate.me/api/v1/userlists/',
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
      const {
        currentSerieType,
        currentUserlistId,
        currentSeasonValue,
        currentEpisodeValue,
      } = store.getState().userLists;

      const newUserLists = {
        type: currentSerieType,
        seasonNb: currentSeasonValue,
        episodeNb: currentEpisodeValue,
      };

      console.log(newUserLists);

      axios.patch(
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
      const newUserLists = { type: 0 };

      axios.patch(
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
    default:
  }

  // on passe l'action au suivant (userlistMiddleware suivant ou reducer)
  next(action);
};

export default userlistMiddleware;
