/* eslint-disable eqeqeq */
import {
  ADD_SERIE_TO_LIST,
  EDIT_USERLIST_SERIE,
  DELETE_USERLIST_SERIE,
  CHANGE_CURRENT_SEASON_VALUE,
  CHANGE_CURRENT_EPISODE_VALUE,
  FIND_SERIE_IN_USERLIST,
} from 'src/actions/actions';

import { SAVE_USERLIST } from 'src/actions/login';

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
        currentSerieId: action.serieId,
        currentSerieType: action.serieType,
        currentUserlistId: newUserlistArray[newUserlistArray.length - 1].id,
      };
    }

    case EDIT_USERLIST_SERIE: {
      let userlistId = 0;
      const newUserlistArray = [...state.userLists];
      newUserlistArray.forEach((serie) => {
        if (serie.series.id == action.serieId) {
          serie.type = action.serieType;
          userlistId = serie.id;
        }
      });
      return {
        ...state,
        userLists: newUserlistArray,
        currentSerieId: action.serieId,
        currentSerieType: action.serieType,
        currentUserlistId: userlistId,
      };
    }

    case DELETE_USERLIST_SERIE: {
      let userlistId = 0;
      const userlistArray = [...state.userLists];
      const newUserlistArray = [];
      userlistArray.forEach((serie) => {
        if (serie.series.id != action.serieId) {
          newUserlistArray.push({
            id: serie.id,
            seasonNb: serie.seasonNb,
            episodeNb: serie.episodeNb,
            createdAt: serie.createdAt,
            updatedAt: serie.updatedAt,
            type: serie.type,

            series:
              {
                id: serie.series.id,
                title: serie.series.title,
                image: serie.series.image,
              },
          });
        }
        else {
          serie.type = 0;
          userlistId = serie.id;
        }
      });
      return {
        ...state,
        userLists: newUserlistArray,
        currentSerieId: action.serieId,
        currentUserlistId: userlistId,
      };
    }

    case CHANGE_CURRENT_SEASON_VALUE: {
      let seasonValue = 0;
      const newUserlistArray = [...state.userLists];
      newUserlistArray.forEach((serie) => {
        if (serie.series.id == action.serieId) {
          serie.seasonNb = action.value;
          seasonValue = action.value;
        }
      });
      return {
        ...state,
        userLists: newUserlistArray,
        currentSeasonValue: seasonValue,
      };
    }

    case CHANGE_CURRENT_EPISODE_VALUE: {
      let episodeValue = 0;
      const newUserlistArray = [...state.userLists];
      newUserlistArray.forEach((serie) => {
        if (serie.series.id === action.serieId) {
          serie.episodeNb = action.value;
          episodeValue = action.value;
        }
      });
      return {
        ...state,
        userLists: newUserlistArray,
        currentEpisodeValue: episodeValue,
      };
    }

    case FIND_SERIE_IN_USERLIST: {
      let serieInUserlist = {
        id: 0,
        seasonNb: 0,
        episodeNb: 0,
        createdAt: '',
        updatedAt: '',
        type: 0,
        series: {
          id: 0,
          title: '',
          image: '',
        },
      };
      const newUserlistArray = [...state.userLists];
      newUserlistArray.forEach((serie) => {
        if (serie.series.id == action.serieId) {
          serieInUserlist.id = serie.id;
          serieInUserlist.seasonNb = serie.seasonNb;
          serieInUserlist.episodeNb = serie.episodeNb;
          serieInUserlist.createdAt = serie.createdAt;
          serieInUserlist.updatedAt = serie.updatedAt;
          serieInUserlist.type = serie.type;
          serieInUserlist.series.id = serie.series.id;
          serieInUserlist.series.title = serie.series.title;
          serieInUserlist.series.image = serie.series.image;
        }
      });
      return {
        ...state,
        currentSerieInUserlist: serieInUserlist,
      };
    }

    default:
      return state;
  }
}

export default userListsReducer;
