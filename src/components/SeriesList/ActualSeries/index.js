// == Import
import SeriesCard from './ActualSeriesCard';


// == Composant
const ActualSeries = () => {

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
export default ActualSeries;
