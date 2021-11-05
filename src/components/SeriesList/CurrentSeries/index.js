// == Import
import PropTypes from 'prop-types';

import SeriesCard from '../../SeriesGrid/SeriesCard';
import ListNavigation from '../../ListNavigation';

import './styles.scss';

// == Composant

const CurrentSeries = ({ currentSeries }) => (
  <div className="list-navigation">
    <ListNavigation />
    <div className="series-grid">
      {currentSeries.map((serie) => (
        serie.type === 2
        && <SeriesCard key={serie.id} isUserCurrentList {...serie.series[0]} />
      ))}
    </div>
  </div>
);

CurrentSeries.propTypes = {
  currentSeries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default CurrentSeries;
