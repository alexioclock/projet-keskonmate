export const FETCH_SERIES = 'FETCH_SERIES';
export const SAVE_SERIES = 'SAVE_SERIES';

export const fetchSeries = () => ({
  type: FETCH_SERIES,
});

export const saveSeries = (series) => ({
  type: SAVE_SERIES,
  series: series,
});
