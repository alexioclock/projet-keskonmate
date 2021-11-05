// == Import
import PropTypes from 'prop-types';

import SeriesCard from 'src/components/SeriesGrid/SeriesCard';
import ListNavigation from '../../ListNavigation';

import './styles.scss';

// == Composant
const ToWatchSeries = ({ toWatchSeries }) => (
  <div className="list-navigation">
    <ListNavigation />
    <div className="series-grid to-watch-series-grid">
      {toWatchSeries.map((serie) => (
        serie.type === 3
        && <SeriesCard key={serie.id} isUserToWatchList {...serie.series[0]} />
      ))}
    </div>
  </div>
);

ToWatchSeries.propTypes = {
  toWatchSeries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default ToWatchSeries;
