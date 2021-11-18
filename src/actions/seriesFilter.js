// === action types
export const ALPHABETICAL_TITLE_FILTER = 'ALPHABETICAL_TITLE_FILTER';
export const REVERSE_ALPHABETICAL_TITLE_FILTER = 'REVERSE_ALPHABETICAL_TITLE_FILTER';
export const YOUNGER_TO_OLDER_FILTER = ' YOUNGER_TO_OLDER_FILTER';
export const OLDER_TO_YOUNGER_FILTER = 'OLDER_TO_YOUNGER_FILTER';
export const ALPHABETICAL_DIRECTOR_FILTER = 'ALPHABETICAL_DIRECTOR_FILTER';
export const REVERSE_ALPHABETICAL_DIRECTOR_FILTER = 'REVERSE_ALPHABETICAL_DIRECTOR_FILTER';
export const GENRE_FILTER = 'GENRE_FILTER';
export const FETCH_HOME_ORDER = 'FETCH_HOME_ORDER';
export const SAVE_HOME_ORDER = 'SAVE_HOME_ORDER';

export const alphabeticalTitleFilter = () => ({
  type: ALPHABETICAL_TITLE_FILTER,
});

export const reverseAlphabeticalTitleFilter = () => ({
  type: REVERSE_ALPHABETICAL_TITLE_FILTER,
});

export const youngerToOlderFilter = () => ({
  type: YOUNGER_TO_OLDER_FILTER,
});

export const olderToYoungerFilter = () => ({
  type: OLDER_TO_YOUNGER_FILTER,
});

export const alphabeticalDirectorFilter = () => ({
  type: ALPHABETICAL_DIRECTOR_FILTER,
});

export const reverseAlphabeticalDirectorFilter = () => ({
  type: REVERSE_ALPHABETICAL_DIRECTOR_FILTER,
});

export const genreFilter = (genreId) => ({
  type: GENRE_FILTER,
  genreId: genreId,
});

export const fetchHomeOrder = () => ({
  type: FETCH_HOME_ORDER,
});

export const saveHomeOrder = (homeOrder) => ({
  type: SAVE_HOME_ORDER,
  homeOrder: homeOrder,
});
