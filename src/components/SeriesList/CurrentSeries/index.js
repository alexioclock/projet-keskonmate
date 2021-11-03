// == Import
import PropTypes from 'prop-types';

import SeriesCard from './CurrentSeriesCard';
import './styles.scss';

// == Composant
const CurrentSeries = ({ series }) => (
  <div className="series-grid">
    {series.map((serie) => (
      <SeriesCard key={serie.id} {...serie} />
    ))}
  </div>
);

CurrentSeries.propTypes = {
  series: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default CurrentSeries;
