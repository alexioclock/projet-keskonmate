// === action types
export const TOGGLE_ADD_DROPDOWN_OPEN = 'TOGGLE_ADD_DROPDOWN_OPEN';
export const ADD_SERIE_TO_LIST = 'ADD_SERIE_TO_LIST';
export const EDIT_USERLIST_SERIE = 'EDIT_USERLIST_SERIE';
export const CHANGE_CURRENT_SEASON_VALUE = 'CHANGE_CURRENT_SEASON_VALUE';
export const CHANGE_CURRENT_EPISODE_VALUE = 'CHANGE_CURRENT_EPISODE_VALUE';
export const HANDLE_SEARCH_CHANGE = 'HANDLE_SEARCH_CHANGE';
export const FILTER_SEARCHED_SERIES = 'FILTER_SEARCHED_SERIES';
export const ADD_SERIE_TO_API_USERLIST = 'ADD_SERIE_TO_API_USERLIST';
export const EDIT_SERIE_TO_API_USERLIST = 'EDIT_SERIE_TO_API_USERLIST';
export const FIND_SERIE_IN_USERLIST = 'FIND_SERIE_IN_USERLIST';
export const FETCH_USERLIST = 'FETCH_USERLIST';
export const SAVE_USERLIST = 'SAVE_USERLIST';

// === action creators
export const addSerieToList = (newSerieId, newSerieTitle, newSerieImage, newSerieType) => ({
  type: ADD_SERIE_TO_LIST,
  serieId: newSerieId,
  serieTitle: newSerieTitle,
  serieImage: newSerieImage,
  serieType: newSerieType,
});

export const editUserlistSerie = (userlistId, newSerieType) => ({
  type: EDIT_USERLIST_SERIE,
  userlistId: userlistId,
  serieType: newSerieType,
});

export const toggleAddDropdownOpen = () => ({
  type: TOGGLE_ADD_DROPDOWN_OPEN,
});

export const changeCurrentSeasonValue = (userlistId, newSeasonValue) => ({
  type: CHANGE_CURRENT_SEASON_VALUE,
  userlistId: userlistId,
  seasonValue: newSeasonValue,
});

export const changeCurrentEpisodeValue = (userlistId, newEpisodeValue) => ({
  type: CHANGE_CURRENT_EPISODE_VALUE,
  userlistId: userlistId,
  episodeValue: newEpisodeValue,
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

export const findSerieInUserlist = (serieId) => ({
  type: FIND_SERIE_IN_USERLIST,
  serieId: serieId,
});

export const fetchUserlist = (userId) => ({
  type: FETCH_USERLIST,
  userId: userId,
});

export const saveUserlist = (userlist) => ({
  type: SAVE_USERLIST,
  userlist: userlist,
});
