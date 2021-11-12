// === action types
export const TOGGLE_ADD_DROPDOWN_OPEN = 'TOGGLE_ADD_DROPDOWN_OPEN';
export const HANDLE_SEARCH_CHANGE = 'HANDLE_SEARCH_CHANGE';
export const FILTER_SEARCHED_SERIES = 'FILTER_SEARCHED_SERIES';
export const FETCH_USERLIST = 'FETCH_USERLIST';
export const SAVE_USERLIST = 'SAVE_USERLIST';
export const FIND_SERIE_IN_USERLIST = 'FIND_SERIE_IN_USERLIST';
export const ADD_USERLIST_FROM_API = 'ADD_USERLIST_FROM_API';
export const EDIT_USERLIST_FROM_API = 'EDIT_USERLIST_FROM_API';
export const ADD_SERIE_TO_API_USERLIST = 'ADD_SERIE_TO_API_USERLIST';
export const EDIT_SERIE_TO_API_USERLIST = 'EDIT_SERIE_TO_API_USERLIST';

// === action creators
export const toggleAddDropdownOpen = () => ({
  type: TOGGLE_ADD_DROPDOWN_OPEN,
});

export const handleSearchChange = (newValue) => ({
  type: HANDLE_SEARCH_CHANGE,
  value: newValue,
});

export const filterSearchedSeries = () => ({
  type: FILTER_SEARCHED_SERIES,
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

export const addUserlistFromApi = (newUserlist) => ({
  type: ADD_USERLIST_FROM_API,
  userlist: newUserlist,
});

export const editUserlistFromApi = (newUserlist) => ({
  type: EDIT_USERLIST_FROM_API,
  userlist: newUserlist,
});

export const addSerieToApiUserlist = (
  newSerieId,
  newSerieTitle,
  newSerieImage,
  newSerieType,
) => ({
  type: ADD_SERIE_TO_API_USERLIST,
  serieId: newSerieId,
  serieTitle: newSerieTitle,
  serieImage: newSerieImage,
  serieType: newSerieType,
});

export const editSerieToApiUserlist = (
  userlistId,
  newSerieType,
  newCurrentSeason,
  newCurrentEpisode,
) => ({
  type: EDIT_SERIE_TO_API_USERLIST,
  userlistId: userlistId,
  serieType: newSerieType,
  currentSeason: newCurrentSeason,
  currentEpisode: newCurrentEpisode,
});
