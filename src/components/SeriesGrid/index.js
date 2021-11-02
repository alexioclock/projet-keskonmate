// Composants
import SeriesCard from './SeriesCard';

import seriesData from '../../utils/series';

// Style
import './styles.scss';

// == Composant
const SeriesGrid = () => (
  <div className="series-grid">
    {/* Grille de SeriesCard */}
    {seriesData.map((serie) => (
      <SeriesCard serieDetails={serie} key={serie.id} />
    ))}
  </div>
);

SeriesGrid.propTypes = {};

// == Export
export default SeriesGrid;
