import PropTypes from 'prop-types';
import { useEffect } from 'react';
// Composants
import SeriesCard from 'src/containers/SeriesGrid/SeriesCard';

// Style
import './styles.scss';

// == Composant
const SeriesGrid = ({ series, loadSeries }) => {
  console.log(series);
  useEffect(() => {
    loadSeries();
  }, []);
  return (
    <div className="series-grid">
      {series.map((serie) => (
        <SeriesCard key={serie.id} isCatalogue {...serie} />
      ))}
    </div>
  );
};
SeriesGrid.propTypes = {
  series: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  loadSeries: PropTypes.func.isRequired,
};

// == Export
export default SeriesGrid;
