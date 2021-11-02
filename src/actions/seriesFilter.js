// === action types
export const FILTER_GENRE_SERIES = 'FILTER_GENRE_SERIES';

// === action creators
export const doSomething = (genre) => ({
  type: FILTER_GENRE_SERIES,
  payload: genre,
});
