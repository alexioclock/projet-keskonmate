// == Import
import PropTypes from 'prop-types';

import SeriesCard from 'src/components/SeriesGrid/SeriesCard';
import './styles.scss';

// == Composant
const WatchedSeries = ({ series }) => (
  <div className="actual-series">
    <div className="series-grid">
      {series.map((serie) => (
        <SeriesCard key={serie.id} {...serie} />
      ))}
    </div>
  </div>
);

WatchedSeries.propTypes = {
  series: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default WatchedSeries;
