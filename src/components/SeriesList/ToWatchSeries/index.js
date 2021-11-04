// == Import
import PropTypes from 'prop-types';
// import SeriesCard from './FutureSeriesCard';
import SeriesCard from 'src/components/SeriesGrid/SeriesCard';
import PageList from '../../PageList';

import './styles.scss';

// == Composant
const ToWatchSeries = ({ toWatchSeries }) => {


  return(
  <>
    <PageList />
    <div className="actual-series">
    <div className="series-grid">
    {toWatchSeries.map((serie) => {
      return serie.type === 3 &&
        
        <SeriesCard key={serie.id}  {...serie}/>
      
    })}
  </div>
    </div>
  </>
);
}

// toWatchSeries.propTypes = {
//   toWatchSeries: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     }).isRequired,
//   ).isRequired,
// };

// == Export
export default ToWatchSeries;
