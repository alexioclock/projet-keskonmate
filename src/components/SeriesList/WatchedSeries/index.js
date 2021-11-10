// == Import
import PropTypes from 'prop-types';

import SeriesCard from 'src/containers/SeriesGrid/SeriesCard';
import ListNavigation from 'src/components/ListNavigation';

import './styles.scss';

// == Composant
const WatchedSeries = ({ watchedSeries }) => (
  <div className="list-navigation">
    <ListNavigation />
    <div className="series-grid watched-series-grid">
      {watchedSeries.map((serie) => (
        serie.type === 1
        && <SeriesCard key={serie.id} type={serie.type} isUserWatchedList {...serie.series} />
      ))}
    </div>
  </div>
);

WatchedSeries.propTypes = {
  watchedSeries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default WatchedSeries;
