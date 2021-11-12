// == Import
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';
import { Card, Image } from 'semantic-ui-react';
import Poster from 'src/assets/pictures/squid-game.jpg';
import ListsButtons from './ListsButtons';
import Loading from '../Loading';

const Details = ({
  isConnected,
  userSerie,
}) => {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [currentSeriesDetails, setCurrentSeriesDetails] = useState({});
  useEffect(() => {
    axios.get(`http://keskonmate.me/api/v1/series/${slug}`)
      .then((response) => {
        console.log(response.data);
        setCurrentSeriesDetails(response.data);
      })
      .catch((error) => {
        console.warn(error);
      })
      .finally(() => {
        // traitement exécuté après le traitement de la réponse, que ce soit un
        // succès ou un échec
        console.log('finally');

        // on indique que le chargement des articles est terminé
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="detail-container">
      {isLoading && <Loading />}
      {!isLoading && (
      <>
        <div className="banner-container">
          {/* Poster à changer quand on aura l'url de l'image depuis l'API */}
          {currentSeriesDetails.image === ''
        && (
          <img
            className="poster"
            src={Poster}
            alt="poster"
          />
        )}
          <img className="poster" src={currentSeriesDetails.image} alt="" />
          <div className="banner-text">
            <h1 className="series-title">{currentSeriesDetails.title}</h1>
            { !isConnected
              ? <a href="/connection" className="connection-button">Connecte-toi </a>
              : <ListsButtons type={userSerie.type} /> }
          </div>
        </div>

        <div className="genre-list">
          <ul className="ul-genre">
            {currentSeriesDetails.genre.map((genre) => (
              <li className="li-genre" key={genre.id}><a href="/">{genre.name}</a></li>
            ))}
          </ul>
        </div>

        <div className="resume">
          <h3>Résumé</h3>
          <p>{currentSeriesDetails.synopsis}</p>
        </div>

        <div className="actors-container">
          <h3>Acteurs Principaux</h3>
          <ul className="ul-actors">
            {currentSeriesDetails.actor.map((actor) => (
              <li className="li-actors" key={actor.id}>
                <Card className="actor-card">
                  {actor.image === ''
                  && (
                    <Image
                      className="actor-card-image"
                      src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                    />
                  )}
                  <Image src={actor.image} />
                  <Card.Content>
                    <Card.Header className="actor-name">{actor.name}</Card.Header>
                  </Card.Content>
                </Card>
              </li>
            ))}
          </ul>
        </div>

        <div className="seasons-container">
          <h3>Saisons</h3>
          <ul className="ul-seasons">
            {currentSeriesDetails.season.map((season) => (
              <li className="li-seasons" key={season.id}>
                <Card className="season-card">
                  <Image src="" className="season-image" />
                  <Card.Content>
                    <Card.Header>Saison {season.seasonNumber}</Card.Header>
                  </Card.Content>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </>
      )}
    </div>
  );
};
Details.propTypes = {
  isConnected: PropTypes.bool.isRequired,

  userSerie: PropTypes.shape({
    type: PropTypes.number.isRequired,
  }),

};

Details.defaultProps = {
  userSerie: {
    type: 0,
  },
};
// == Export
export default Details;
