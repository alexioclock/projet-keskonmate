import PropTypes from 'prop-types';
import { useEffect } from 'react';
// Composants
import SeriesCard from 'src/containers/SeriesGrid/SeriesCard';
import Loading from 'src/components/Loading';

// Style
import './styles.scss';

// == Composant

const SeriesGrid = ({
  series, userlist, loadSeries, showLoading,
}) => {
  let serieType = 0;
  let userlistId = 0;
  let userlistSeasonNb = 0;
  let userlistEpisodeNb = 0;
  useEffect(() => {
    loadSeries();
  }, []);
  return (
    <div className="series-grid">
      {showLoading && (
        <Loading />
      )}
      {!showLoading && (
        {series.map((serie) => {
          serieType = 0;
          userlistId = 0;
          userlistSeasonNb = 0;
          userlistEpisodeNb = 0;
            <>
              {userlist.forEach((userlistSerie) => {
                if (serie.id === userlistSerie.series.id) {
                  serieType = userlistSerie.type;
                  userlistId = userlistSerie.id;
                  userlistSeasonNb = userlistSerie.seasonNb;
                  userlistEpisodeNb = userlistSerie.episodeNb;
                }
              })}
            </>;
            return (
              <SeriesCard
                key={serie.id}
                isCatalogue
                userlistId={userlistId}
                currentSeason={userlistSeasonNb}
                currentEpisode={userlistEpisodeNb}
                type={serieType}
                {...serie}
              />
            );
        })}
      )}
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

  userlist: PropTypes.arrayOf(
    PropTypes.shape({
      series: PropTypes.oneOfType([
        PropTypes.array.isRequired,
        PropTypes.object.isRequired,
      ]).isRequired,
      type: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,

  showLoading: PropTypes.bool.isRequired,
};

// == Export
export default SeriesGrid;
