import PropTypes from 'prop-types';

import SeriesCard from 'src/containers/SeriesGrid/SeriesCard';
import ListNavigation from 'src/components/ListNavigation';

import './styles.scss';

const CurrentSeries = ({ currentSeries }) => (
  <div className="list-navigation">
    <ListNavigation />
    <div className="series-grid current-series-grid">
      {currentSeries.map((serie) => (
        serie.type === 2
        && (
          <SeriesCard
            key={serie.id}
            type={serie.type}
            userlistId={serie.id}
            currentSeason={serie.seasonNb}
            currentEpisode={serie.episodeNb}
            isUserCurrentList
            {...serie.series}
          />
        )
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

export default CurrentSeries;
