import './styles.scss';
import SeriesCard from 'src/components/SeriesGrid/SeriesCard';

const SuggestionList = () => (
  <div className="suggestion-list">
    <p className="list-name">
      Vous pourriez aimer...
    </p>

    <a href="/series" className="series-link">
      Voir notre catalogue de séries
    </a>

    <div className="series-cards">
      <SeriesCard />
      <SeriesCard />
      <SeriesCard />
      <SeriesCard />
      <SeriesCard />
    </div>
  </div>
);

export default SuggestionList;
