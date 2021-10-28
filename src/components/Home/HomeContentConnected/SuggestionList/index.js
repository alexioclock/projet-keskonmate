import './styles.scss';
import SeriesCard from 'src/components/SeriesGrid/SeriesCard';

const SuggestionList = () => (
  <div className="suggestion-list">
    <p className="list-name">
      Vous pourriez aimer...
    </p>
    <SeriesCard />
    <SeriesCard />
    <SeriesCard />
    <SeriesCard />
    <SeriesCard />

  </div>
);

export default SuggestionList;
