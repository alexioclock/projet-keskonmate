import PropTypes from 'prop-types';

import './styles.scss';
import SeriesCard from 'src/containers/SeriesGrid/SeriesCard';

const HomeCurrentList = ({ currentSeries }) => (
  <div className="home-current-list">
    <p className="list-name">
      Les séries en cours
    </p>
    <a href="/series-en-cours" className="series-link">
      Voir la liste complète
    </a>
    <div className="series-cards">
      {currentSeries.map((serie) => (
        serie.type === 2
        && (
          <SeriesCard
            key={serie.id}
            type={serie.type}
            userlistId={serie.id}
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
