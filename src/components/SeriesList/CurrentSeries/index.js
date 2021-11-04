// == Import
import PropTypes from 'prop-types';
import PageList from '../../PageList'; 
import SeriesCard from './CurrentSeriesCard';
import './styles.scss';

// == Composant

const CurrentSeries = ({ currentSeries }) => {


  return(
    <>
    <PageList />
  <div className="series-grid">
    {currentSeries.map((serie) => {
      return serie.type === 2 &&
        
        <SeriesCard key={serie.id}  {...serie}/>
      
    })}
  </div>
  </>
  );
  }


// CurrentSeries.propTypes = {
//   series: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     }).isRequired,
//   ).isRequired,
// };

// == Export
export default CurrentSeries;
