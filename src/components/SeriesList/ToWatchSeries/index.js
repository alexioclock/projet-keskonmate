// == Import
import PropTypes from 'prop-types';

import SeriesCard from 'src/containers/SeriesGrid/SeriesCard';
import ListNavigation from 'src/components/ListNavigation';

import './styles.scss';

// == Composant
const ToWatchSeries = ({ toWatchSeries }) => (
  <div className="list-navigation">
    <ListNavigation />
    <div className="series-grid to-watch-series-grid">
      {toWatchSeries.map((serie) => (
        serie.type === 3
        && (
          <SeriesCard
            key={serie.id}
            type={serie.type}
            userlistId={serie.id}
            isUserToWatchList
            {...serie.series}
          />
        )
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
