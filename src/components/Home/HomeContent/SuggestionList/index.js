import PropTypes from 'prop-types';
import { useEffect } from 'react';

import './styles.scss';
import SeriesCard from 'src/containers/SeriesGrid/SeriesCard';

const SuggestionList = ({ series, userlist, loadSeries }) => {
  let serieType = 0;
  useEffect(() => {
    loadSeries();
  }, []);
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
                if (serie.id === userlistSerie.series.id) {
                  serieType = userlistSerie.type;
                }
              })}
            </>;
            return (
              serie.homeOrder >= 1
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

  loadSeries: PropTypes.func.isRequired,

  userlist: PropTypes.arrayOf(
    PropTypes.shape({
      series: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
        }).isRequired,
      ).isRequired,
      type: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default SuggestionList;
