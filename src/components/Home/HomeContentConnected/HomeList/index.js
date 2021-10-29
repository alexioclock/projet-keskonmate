import './styles.scss';
import SeriesCard from 'src/components/SeriesGrid/SeriesCard';

const HomeList = () => (
  <div className="home-list">
    <p className="list-name">
      Les séries en cours
    </p>
    <a href="/lists">
      Voir la liste complète
    </a>
    <SeriesCard />
    <SeriesCard />
    <SeriesCard />
    <SeriesCard />

  </div>
);

export default HomeList;
