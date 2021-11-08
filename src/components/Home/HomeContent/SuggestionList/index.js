import PropTypes from 'prop-types';

import './styles.scss';
import SeriesCard from 'src/containers/SeriesGrid/SeriesCard';

const SuggestionList = ({ series, userlist }) => {
  let serieType = 0;
  return (
    <div className="suggestion-list">
      <p className="list-name">
        Vous pourriez aimer...
      </p>

      <a href="/series" className="series-link">
        Voir notre catalogue de séries
      </a>

      <div className="series-cards">
        {series.map((serie) => {
          serieType = 0;
            <>
              {userlist.forEach((userlistSerie) => {
                if (serie.id === userlistSerie.seriesNb) {
                  serieType = userlistSerie.type;
                }
              })}
            </>;
            return (
              serie.home_order >= 1
            && <SeriesCard key={serie.id} isSuggestionsList type={serieType} {...serie} />
            );
        })}
      </div>
    </div>
  );
};

SuggestionList.propTypes = {
  series: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  userlist: PropTypes.arrayOf(
    PropTypes.shape({
      seriesNb: PropTypes.number.isRequired,
      type: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default SuggestionList;
