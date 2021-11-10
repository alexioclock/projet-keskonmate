/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
/**
 *  on trouve la série voulue dans la liste des séries
 * @param {Array} series - toutes les séries
 * @param {string} searchedSlug - le slug de la série recherchée
 * @return {Object} - La série trouvée
 */
export function findSerie(series, searchedSlug) {
  const serie = series.find((testedSerie) => {
    // eslint-disable-next-line eqeqeq
    return testedSerie.id == searchedSlug;
  });
  return serie;
}

export function findSerieInUserLists(userLists, searchedSlug) {
  const serie = userLists.find((testedSerie) => {
    // eslint-disable-next-line eqeqeq
    return testedSerie.series.id == searchedSlug;
  });
  return serie;
}
