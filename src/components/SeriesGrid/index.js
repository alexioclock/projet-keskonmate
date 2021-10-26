// Composants
import SeriesCard from './SeriesCard';

// Style
import './styles.scss';

// == Composant
const SeriesGrid = () => (
  <div className="series-grid">
    {/* Grille de SeriesCard */}
    <SeriesCard />
    <SeriesCard />
    <SeriesCard />
    <SeriesCard />
    <SeriesCard />
    <SeriesCard />
    <SeriesCard />
    <SeriesCard />
    <SeriesCard />
    <SeriesCard />
  </div>
);

SeriesGrid.propTypes = {};

// == Export
export default SeriesGrid;
