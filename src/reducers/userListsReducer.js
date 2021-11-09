import {
  ADD_SERIE_TO_LIST,
  EDIT_USERLIST_SERIE,
  DELETE_USERLIST_SERIE,
  CHANGE_CURRENT_SEASON_VALUE,
  CHANGE_CURRENT_EPISODE_VALUE,
} from 'src/actions/actions';

import { SAVE_USERLIST } from 'src/actions/login';

const initialState = {
  userLists: [],
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
        seriesNb: action.serieId,
        episodeNb: 0,
        type: action.serieType,
        series:
        [
          {
            id: action.serieId,
            title: action.serieTitle,
          },
        ],
      }];

      return {
        ...state,
        userLists: newUserlistArray,
      };
    }

    case EDIT_USERLIST_SERIE: {
      const newUserlistArray = [...state.userLists];
      newUserlistArray.forEach((serie) => {
        if (serie.seriesNb === action.serieId) {
          serie.type = action.serieType;
        }
      });
      return {
        ...state,
        userLists: newUserlistArray,
      };
    }

    case DELETE_USERLIST_SERIE: {
      const userlistArray = [...state.userLists];
      const newUserlistArray = [];
      userlistArray.forEach((serie) => {
        if (serie.seriesNb !== action.serieId) {
          newUserlistArray.push({
            id: serie.id,
            seasonNb: serie.seasonNb,
            seriesNb: serie.seriesNb,
            episodeNb: serie.episodeNb,
            createdAt: serie.createdAt,
            updatedAt: serie.updatedAt,
            type: serie.type,

            series:
            [
              {
                id: serie.series[0].id,
                title: serie.series[0].title,
              },
            ],
          });
        }
        else {
          serie.type = 0;
        }
      });
      return {
        ...state,
        userLists: newUserlistArray,
      };
    }

    case CHANGE_CURRENT_SEASON_VALUE: {
      const newUserlistArray = [...state.userLists];
      newUserlistArray.forEach((serie) => {
        if (serie.seriesNb === action.serieId) {
          serie.seasonNb = action.value;
        }
      });
      return {
        ...state,
        userLists: newUserlistArray,
      };
    }

    case CHANGE_CURRENT_EPISODE_VALUE: {
      const newUserlistArray = [...state.userLists];
      newUserlistArray.forEach((serie) => {
        if (serie.seriesNb === action.serieId) {
          serie.episodeNb = action.value;
        }
      });
      return {
        ...state,
        userLists: newUserlistArray,
      };
    }

    default:
      return state;
  }
}

export default userListsReducer;
