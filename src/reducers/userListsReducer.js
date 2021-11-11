/* eslint-disable eqeqeq */
import {
  ADD_SERIE_TO_LIST,
  EDIT_USERLIST_SERIE,
  CHANGE_CURRENT_SEASON_VALUE,
  CHANGE_CURRENT_EPISODE_VALUE,
  FIND_SERIE_IN_USERLIST,
  SAVE_USERLIST,
} from 'src/actions/actions';

const initialState = {
  userLists: [],
  currentSerieInUserlist: {},
  currentSerieId: 0,
  currentSerieType: 0,
  currentUserlistId: 0,
  currentSeasonValue: 0,
  currentEpisodeValue: 0,
};

function userListsReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_USERLIST:
      return {
        ...state,
        userLists: action.userlist,
      };

    case ADD_SERIE_TO_LIST: {
      const newUserlistArray = [...state.userLists, {
        id: (state.userLists.length > 0 ? state.userLists[state.userLists.length - 1].id + 1 : 1),
        seasonNb: 0,
        episodeNb: 0,
        type: action.serieType,
        series:
          {
            id: action.serieId,
            title: action.serieTitle,
            image: action.serieImage,
          },
      }];

      return {
        ...state,
        userLists: newUserlistArray,
        currentSerieId: newUserlistArray[newUserlistArray.length - 1].id,
        currentSerieType: action.serieType,
      };
    }

    case EDIT_USERLIST_SERIE: {
      const newUserlistArray = [...state.userLists];
      newUserlistArray.forEach((userlistSerie) => {
        if (userlistSerie.id == action.userlistId) {
          userlistSerie.type = action.serieType;
        }
      });
      return {
        ...state,
        userLists: newUserlistArray,
        currentSerieType: action.serieType,
        currentUserlistId: action.userlistId,
      };
    }

    case CHANGE_CURRENT_SEASON_VALUE: {
      const newUserlistArray = [...state.userLists];
      newUserlistArray.forEach((userlistSerie) => {
        if (userlistSerie.id == action.userlistId) {
          userlistSerie.seasonNb = action.seasonValue;
        }
      });
      return {
        ...state,
        userLists: newUserlistArray,
        currentUserlistId: action.userlistId,
        currentSeasonValue: action.seasonValue,
      };
    }

    case CHANGE_CURRENT_EPISODE_VALUE: {
      const newUserlistArray = [...state.userLists];
      newUserlistArray.forEach((userlistSerie) => {
        if (userlistSerie.id == action.userlistId) {
          userlistSerie.episodeNb = action.episodeValue;
        }
      });
      return {
        ...state,
        userLists: newUserlistArray,
        currentUserlistId: action.userlistId,
        currentEpisodeValue: action.episodeValue,
      };
    }

    case FIND_SERIE_IN_USERLIST: {
      let serieType = 0;
      const newUserlistArray = [...state.userLists];
      newUserlistArray.forEach((serie) => {
        if (serie.series.id == action.serieId) {
          serieType = serie.type;
        }
      });
      return {
        ...state,
        currentSerieType: serieType,
        currentSerieId: action.serieId,
      };
    }

    default:
      return state;
  }
}

export default userListsReducer;
