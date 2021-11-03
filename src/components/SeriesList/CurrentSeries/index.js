// == Import
import PropTypes from 'prop-types';

import SeriesCard from './CurrentSeriesCard';
import './styles.scss';

// == Composant
const CurrentSeries = ({ currentSeries }) => {

   console.log(currentSeries[4].type);
   console.log(currentSeries);
   console.log(currentSeries.series.title);

  return(
  <div className="series-grid">
    {(currentSeries.type) === 2 ? currentSeries.map((serie) => (
 
      < SeriesCard key={serie.id}  {...serie}/>

    )) 
    : "Vous ne regardez pas de séries pour le moment"}
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
