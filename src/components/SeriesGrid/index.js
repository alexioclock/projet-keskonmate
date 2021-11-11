import PropTypes from 'prop-types';
import { useEffect } from 'react';
// Composants
import SeriesCard from 'src/containers/SeriesGrid/SeriesCard';

// Style
import './styles.scss';

// == Composant

const SeriesGrid = ({ series, userlist, loadSeries }) => {
  let serieType = 0;
  let userlistId = 0;
  useEffect(() => {
    loadSeries();
  }, []);
  return (
    <div className="series-grid">
      {series.map((serie) => {
        serieType = 0;
        userlistId = 0;
          <>
            {userlist.forEach((userlistSerie) => {
              if (serie.id === userlistSerie.series.id) {
                serieType = userlistSerie.type;
                userlistId = userlistSerie.id;
              }
            })}
          </>;
          return (
            <SeriesCard
              key={serie.id}
              isCatalogue
              userlistId={userlistId}
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
      series: PropTypes.oneOfType([
        PropTypes.array.isRequired,
        PropTypes.object.isRequired,
      ]).isRequired,
      type: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,

};

// == Export
export default SeriesGrid;
