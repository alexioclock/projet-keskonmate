// === action types
export const DO_SOMETHING = 'DO_SOMETHING';
export const LOG_IN = 'LOG_IN';
export const TOGGLE_ADD_DROPDOWN_OPEN = 'TOGGLE_ADD_DROPDOWN_OPEN';
export const ADD_SERIE_TO_LIST = 'ADD_SERIE_TO_LIST';
export const EDIT_USERLIST_SERIE = 'EDIT_USERLIST_SERIE';
export const DELETE_USERLIST_SERIE = 'DELETE_USERLIST_SERIE';
export const CHANGE_CURRENT_SEASON_VALUE = 'CHANGE_CURRENT_SEASON_VALUE';
export const CHANGE_CURRENT_EPISODE_VALUE = 'CHANGE_CURRENT_EPISODE_VALUE';
export const HANDLE_SEARCH_CHANGE = 'HANDLE_SEARCH_CHANGE';
export const FILTER_SEARCHED_SERIES = 'FILTER_SEARCHED_SERIES';
export const ADD_SERIE_TO_API_USERLIST = 'ADD_SERIE_TO_API_USERLIST';
export const EDIT_SERIE_TO_API_USERLIST = 'EDIT_SERIE_TO_API_USERLIST';
export const DELETE_SERIE_TO_API_USERLIST = 'DELETE_SERIE_TO_API_USERLIST';
export const FIND_SERIE_IN_USERLIST = 'FIND_SERIE_IN_USERLIST';

// === action creators
export const addSerieToList = (newSerieId, newSerieTitle, newSerieImage, newSerieType) => ({
  type: ADD_SERIE_TO_LIST,
  serieId: newSerieId,
  serieTitle: newSerieTitle,
  serieImage: newSerieImage,
  serieType: newSerieType,
});

export const editUserlistSerie = (serieId, newSerieType) => ({
  type: EDIT_USERLIST_SERIE,
  serieId: serieId,
  serieType: newSerieType,
});

export const deleteUserlistSerie = (serieId) => ({
  type: DELETE_USERLIST_SERIE,
  serieId: serieId,
});

export const doSomething = (/* newValue */) => ({
  type: DO_SOMETHING,
  /* value: newValue, */
});

// export const logIn = (/* newValue */) => ({
//   type: LOG_IN,
//   /* value: newValue, */
// });
export const toggleAddDropdownOpen = () => ({
  type: TOGGLE_ADD_DROPDOWN_OPEN,
});
export const logIn = (/* newValue */) => ({
  type: LOG_IN,
  /* value: newValue, */
});

export const changeCurrentSeasonValue = (serieId, newSeasonValue) => ({
  type: CHANGE_CURRENT_SEASON_VALUE,
  serieId: serieId,
  value: newSeasonValue,
});

export const changeCurrentEpisodeValue = (serieId, newEpisodeValue) => ({
  type: CHANGE_CURRENT_EPISODE_VALUE,
  serieId: serieId,
  value: newEpisodeValue,
});

export const handleSearchChange = (newValue) => ({
  type: HANDLE_SEARCH_CHANGE,
  value: newValue,
});

export const filterSearchedSeries = () => ({
  type: FILTER_SEARCHED_SERIES,
});

export const addSerieToApiUserlist = () => ({
  type: ADD_SERIE_TO_API_USERLIST,
});

export const editSerieToApiUserlist = () => ({
  type: EDIT_SERIE_TO_API_USERLIST,
});

export const deleteSerieToApiUserlist = () => ({
  type: DELETE_SERIE_TO_API_USERLIST,
});

export const findSerieInUserlist = (serieId) => ({
  type: FIND_SERIE_IN_USERLIST,
  serieId: serieId,
});
