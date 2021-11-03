// == Import
import PropTypes from 'prop-types';

import SeriesCard from './CurrentSeriesCard';
import './styles.scss';

// == Composant
const CurrentSeries = ({ currentSeries }) => {




  return(
  <div className="series-grid">
    {currentSeries.map((serie) => {
      return serie.type === 1 &&
        <div>Coucou</div>/*<SeriesCard key={serie.id}  {...serie}/>*/
      
    })}
  </div>
  );
  }

CurrentSeries.propTypes = {
  series: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default CurrentSeries;
