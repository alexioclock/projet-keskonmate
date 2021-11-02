import './styles.scss';
import SeriesCard from 'src/components/SeriesGrid/SeriesCard';

import seriesData from '../../../../utils/series';

const SuggestionList = () => (
  <div className="suggestion-list">
    <p className="list-name">
      Vous pourriez aimer...
    </p>

    <a href="/series" className="series-link">
      Voir notre catalogue de séries
    </a>

    <div className="series-cards">
      {seriesData.map((serie) => (
        <SeriesCard serieDetails={serie} key={serie.id} />
      ))}
    </div>
  </div>
);

export default SuggestionList;
