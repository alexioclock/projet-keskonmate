// === action types
export const ALPHABETICAL_TITLE_FILTER = 'ALPHABETICAL_TITLE_FILTER';
export const REVERSE_ALPHABETICAL_TITLE_FILTER = 'REVERSE_ALPHABETICAL_TITLE_FILTER';
export const YOUNGER_TO_OLDER_FILTER = ' YOUNGER_TO_OLDER_FILTER';
export const OLDER_TO_YOUNGER_FILTER = 'OLDER_TO_YOUNGER_FILTER';
export const ALPHABETICAL_DIRECTOR_FILTER = 'ALPHABETICAL_DIRECTOR_FILTER';
export const REVERSE_ALPHABETICAL_DIRECTOR_FILTER = 'REVERSE_ALPHABETICAL_DIRECTOR_FILTER';

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
