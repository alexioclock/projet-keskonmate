import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SeriesCard from 'src/containers/SeriesGrid/SeriesCard';

import './styles.scss';

const HomeCurrentList = ({ currentSeries }) => (
  <div className="home-current-list">
    <p className="list-name">
      Les séries en cours
    </p>
    <Link to="/series-en-cours" className="series-link">
      Voir la liste complète
    </Link>
    <div className="series-cards">
      {currentSeries.map((serie) => (
        serie.type === 2
        && (
          <SeriesCard
            key={serie.id}
            type={serie.type}
            userlistId={serie.id}
            currentSeason={serie.seasonNb}
            currentEpisode={serie.episodeNb}
            isHomeCurrentList
            {...serie.series}
          />
        )
      ))}
    </div>
  </div>
);

HomeCurrentList.propTypes = {
  currentSeries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default HomeCurrentList;
