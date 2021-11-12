/* eslint-disable eqeqeq */
import {
  ADD_USERLIST_FROM_API,
  EDIT_USERLIST_FROM_API,
  FIND_SERIE_IN_USERLIST,
  SAVE_USERLIST,
} from 'src/actions/actions';

const initialState = {
  userLists: [],
  currentSerieInUserlist: {},
  currentSerieId: 0,
  currentSerieType: 0,
  currentUserlistId: 0,
  currentUserlistSeasonNb: 0,
  currentUserlistEpisodeNb: 0,
};

function userListsReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_USERLIST:
      return {
        ...state,
        userLists: action.userlist,
      };

    case ADD_USERLIST_FROM_API: {
      const newUserlistArray = [...state.userLists, action.userlist];

      return {
        ...state,
        userLists: newUserlistArray,
      };
    }

    case EDIT_USERLIST_FROM_API: {
      const newUserlistArray = [...state.userLists];
      newUserlistArray.forEach((userlistSerie) => {
        if (userlistSerie.id == action.userlist.id) {
          userlistSerie.type = action.userlist.type;
          userlistSerie.episodeNb = action.userlist.episodeNb;
          userlistSerie.seasonNb = action.userlist.seasonNb;
        }
      });
      return {
        ...state,
        userLists: newUserlistArray,
      };
    }

    case FIND_SERIE_IN_USERLIST: {
      let serieType = 0;
      let userlistId = 0;
      let userlistSeasonNb = 0;
      let userlistEpisodeNb = 0;
      const newUserlistArray = [...state.userLists];
      newUserlistArray.forEach((serie) => {
        if (serie.series.id == action.serieId && serie.type != 0) {
          serieType = serie.type;
          userlistId = serie.id;
          userlistSeasonNb = serie.seasonNb;
          userlistEpisodeNb = serie.episodeNb;
        }
      });
      return {
        ...state,
        currentSerieType: serieType,
        currentSerieId: action.serieId,
        currentUserlistId: userlistId,
        currentUserlistSeasonNb: userlistSeasonNb,
        currentUserlistEpisodeNb: userlistEpisodeNb,
      };
    }

    default:
      return state;
  }
}

export default userListsReducer;
