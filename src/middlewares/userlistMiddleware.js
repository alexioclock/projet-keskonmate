import axios from 'axios';
import {
  ADD_SERIE_TO_API_USERLIST,
  EDIT_SERIE_TO_API_USERLIST,
  FETCH_USERLIST,
  addUserlistFromApi,
  editUserlistFromApi,
  fetchUserlist,
  saveUserlist,
  findSerieInUserlist,
} from 'src/actions/actions';

const userlistMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USERLIST:
      axios.get(`http://backoffice-keskonmate.me/api/v1/users/${action.userId}`, {
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
      const { currentUser } = store.getState().user;
      const newUserLists = {
        seasonNb: 0,
        episodeNb: 0,
        createdAt: '2021-10-27T15:31:06+02:00',
        updatedAt: null,
        type: action.serieType,
        series: action.serieId,
        users: currentUser.id,
      };

      axios.post(
        // URL
        'http://backoffice-keskonmate.me/api/v1/userlists',
        newUserLists,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )
        .then((response) => {
          // Ici le back devrait nous envoyer toutes les infos sur la série qui vient d'être ajoutée
          console.log(response);
          // On récupère ces infos et on les stocke dans le state grâce au dispatch d'une action
          // response.data est un objet contenant les infos de la série ajoutée
          store.dispatch(addUserlistFromApi(response.data));
          store.dispatch(fetchUserlist(currentUser.id));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;
    }

    case EDIT_SERIE_TO_API_USERLIST: {
      const { currentUser } = store.getState().user;

      console.log(`Id de la série dans la userlist : ${action.userlistId}`);

      const newUserLists = {
        type: +action.serieType,
        seasonNb: +action.currentSeason,
        episodeNb: +action.currentEpisode,
      };

      console.log(newUserLists);

      axios.patch(
        // URL
        `http://backoffice-keskonmate.me/api/v1/userlists/${action.userlistId}`,
        newUserLists,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )
        .then((response) => {
          console.log(response);
          store.dispatch(editUserlistFromApi(response.data));
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
