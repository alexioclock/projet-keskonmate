// == Import
import PropTypes from 'prop-types';
import SeriesCard from 'src/components/SeriesGrid/SeriesCard';
import './styles.scss';

// == Composant
const ToWatchSeries = ({ series }) => (
  <div className="actual-series">
    <div className="series-grid">
      {series.map((serie) => (
        <SeriesCard key={serie.id} isUserToWatchList {...serie} />
      ))}
    </div>
  </div>
);

ToWatchSeries.propTypes = {
  series: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default ToWatchSeries;
