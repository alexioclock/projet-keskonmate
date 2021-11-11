import axios from 'axios';
import {
  ADD_SERIE_TO_API_USERLIST,
  EDIT_SERIE_TO_API_USERLIST,
  FETCH_USERLIST,
  fetchUserlist,
  saveUserlist,
  findSerieInUserlist,
} from 'src/actions/actions';

const userlistMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USERLIST:
      axios.get(`http://keskonmate.me/api/v1/users/${action.userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
        .then((response) => {
          const { currentSerieId } = store.getState().userLists;
          store.dispatch(saveUserlist(response.data.userlist));
          store.dispatch(findSerieInUserlist(currentSerieId));
        })
        .catch((error) => {
          console.warn(error);
        });

      break;

    case ADD_SERIE_TO_API_USERLIST: {
      const { currentSerieId, currentSerieType } = store.getState().userLists;
      const { currentUser } = store.getState().user;
      const newUserLists = {
        seasonNb: 0,
        episodeNb: 0,
        createdAt: '2021-10-27T15:31:06+02:00',
        updatedAt: null,
        type: currentSerieType,
        series: currentSerieId,
        users: currentUser.id,
      };

      axios.post(
        // URL
        'http://keskonmate.me/api/v1/userlists/',
        newUserLists,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )
        .then((response) => {
          console.log(response);
          store.dispatch(fetchUserlist(currentUser.id));
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

      const { currentUser } = store.getState().user;

      console.log(`Id de la série dans la userlist : ${currentUserlistId}`);

      const newUserLists = {
        type: +currentSerieType,
        seasonNb: +currentSeasonValue,
        episodeNb: +currentEpisodeValue,
      };

      console.log(newUserLists);

      axios.patch(
        // URL
        `http://keskonmate.me/api/v1/userlists/${currentUserlistId}`,
        newUserLists,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )
        .then((response) => {
          console.log(response);
          store.dispatch(fetchUserlist(currentUser.id));
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
