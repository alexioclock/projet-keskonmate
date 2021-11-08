export const FETCH_SERIES = 'FETCH_SERIES';
export const SAVE_SERIES = 'SAVE_SERIES';
export const FIND_SERIES = 'FIND_SERIES';
export const SAVE_CURRENT_SERIES_DETAILS = 'SAVE_CURRENT_SERIES_DETAILS';

export const fetchSeries = () => ({
  type: FETCH_SERIES,
});

export const saveSeries = (series) => ({
  type: SAVE_SERIES,
  series: series,
});

export const findSeries = (slug) => ({
  type: FIND_SERIES,
  slug: slug,
});

export const saveCurrentSeriesDetails = (series) => ({
  type: SAVE_CURRENT_SERIES_DETAILS,
  currentSeriesDetails: series,
});