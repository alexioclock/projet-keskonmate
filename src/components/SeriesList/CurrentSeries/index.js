// == Import
import SeriesCard from './CurrentSeriesCard';
import './styles.scss';

// == Composant
const CurrentSeries = () => {

  return(
    <div className="actual-series">
      <div className="series-grid">
        <SeriesCard />
        <SeriesCard />
        <SeriesCard />
        <SeriesCard />
      </div>
  </div>
);
}

// == Export
export default CurrentSeries;
