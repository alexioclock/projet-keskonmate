import PropTypes from 'prop-types';

// Composants
import SeriesCard from './SeriesCard';

// Style
import './styles.scss';

// == Composant
const SeriesGrid = ({ series }) => (
  <div className="series-grid">
    {series.map((serie) => (
      <SeriesCard key={serie.id} isCatalogue {...serie} />
    ))}
  </div>
);

SeriesGrid.propTypes = {
  series: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default SeriesGrid;
