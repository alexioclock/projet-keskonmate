import PropTypes from 'prop-types';

import SeriesCard from 'src/containers/SeriesGrid/SeriesCard';
import Loading from 'src/components/Loading';

import './styles.scss';

const SeriesGrid = ({
  series, userlist, showLoading,
}) => {
  let serieType = 0;
  let userlistId = 0;
  let userlistSeasonNb = 0;
  let userlistEpisodeNb = 0;
  return (
    <div className="series-catalogue">
      {showLoading && (
        <Loading />
      )}
      {!showLoading && (
        <div className="series-grid">
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
        </div>
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

export default SeriesGrid;
