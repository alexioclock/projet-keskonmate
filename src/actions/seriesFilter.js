// === action types
// export const FILTER_BY_GENRE = 'FILTER_BY_GENRE';

// export const ALL_GENRES = 'ALL_GENRES';

// // === action creators

// export const allGenres = () => ({
//   type: ALL_GENRES,
// });



export const filterByGenre = (genre) => ({
  type: FILTER_BY_GENRE,
  genre: genre,
});
