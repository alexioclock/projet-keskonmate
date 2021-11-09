import PropTypes from 'prop-types';
import { useEffect } from 'react';
// Composants
import SeriesCard from 'src/containers/SeriesGrid/SeriesCard';

// Style
import './styles.scss';

// == Composant

const SeriesGrid = ({ series, userlist, loadSeries, isAlphabetical }) => {
  let serieType = 0;
  useEffect(() => {
    loadSeries();
  }, []);
  console.log(isAlphabetical);
  return (
    <div className="series-grid">
      {series.map((serie) => {
        serieType = 0;
          <>
            {userlist.forEach((userlistSerie) => {
              if (serie.id === userlistSerie.seriesNb) {
                serieType = userlistSerie.type;
              }
            })}
          </>;
          return (
            <SeriesCard
              key={serie.id}
              isCatalogue
              type={serieType}
              {...serie}
            />
          );
      })}
    </div>
  );
};

SeriesGrid.propTypes = {
  series: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,

  loadSeries: PropTypes.func.isRequired,

  userlist: PropTypes.arrayOf(
    PropTypes.shape({
      seriesNb: PropTypes.number.isRequired,
      type: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,

  isAlphabetical: PropTypes.bool.isRequired,
};

// == Export
export default SeriesGrid;
