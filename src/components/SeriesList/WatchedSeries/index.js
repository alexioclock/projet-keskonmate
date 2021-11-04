// == Import
import PropTypes from 'prop-types';
import SeriesCard from 'src/components/SeriesGrid/SeriesCard';
import PageList from '../../PageList';
import './styles.scss';

// == Composant
const WatchedSeries = ({ watchedSeries }) => {

    return(
      <>
        <PageList />

            <div className="series-grid">
            {watchedSeries.map((serie) => {
              return serie.type === 1 &&
                
                <SeriesCard key={serie.id}  {...serie}/>

            })}
          </div>
      </>
    );
  }

  // watchedSeries.propTypes = {
  //   watchedSeries: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       id: PropTypes.number.isRequired,
  //     }).isRequired,
  //   ).isRequired,
  // };
  
// == Export
export default WatchedSeries;
