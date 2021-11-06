import { useState } from 'react';
import PropTypes from 'prop-types';

// Composants
import SeriesCard from 'src/containers/SeriesGrid/SeriesCard';

// Style
import './styles.scss';

// == Composant
const SeriesGrid = ({ series, userlist }) => {
  let serieType = 0;
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
            <SeriesCard key={serie.id} isCatalogue type={serieType} {...serie} />
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
  userlist: PropTypes.arrayOf(
    PropTypes.shape({
      seriesNb: PropTypes.number.isRequired,
      type: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default SeriesGrid;
