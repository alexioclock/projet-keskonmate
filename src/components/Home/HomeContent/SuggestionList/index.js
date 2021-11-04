import PropTypes from 'prop-types';

import './styles.scss';
import SeriesCard from 'src/components/SeriesGrid/SeriesCard';

const SuggestionList = ({ series }) => (
  <div className="suggestion-list">
    <p className="list-name">
      Vous pourriez aimer...
    </p>

    <a href="/series" className="series-link">
      Voir notre catalogue de séries
    </a>

    <div className="series-cards">
      {series.map((serie) => (
        <SeriesCard key={serie.id} isSuggestionsList {...serie} />
      ))}
    </div>
  </div>
);

SuggestionList.propTypes = {
  series: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default SuggestionList;
