import userListsData from 'src/utils/userlists';

import { ADD_SERIE_TO_LIST, EDIT_USERLIST_SERIE, DELETE_USERLIST_SERIE } from 'src/actions/actions';

const initialState = {
  userLists: userListsData,
};

function userListsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERIE_TO_LIST: {
      const newUserlistArray = [...state.userLists, {
        id: state.userLists[state.userLists.length - 1].id + 1,
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
            users: {
              id: serie.users.id,
              email: serie.users.id,
            },
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

    default:
      return state;
  }
}

export default userListsReducer;
