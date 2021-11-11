// == Import
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';
import { Card, Image } from 'semantic-ui-react';
import Poster from 'src/assets/pictures/squid-game.jpg';

const Details = ({
  isConnected,
  type,
  findSerieInUserlist,
  addSerieToUserlist,
  editUserlistSerie,
  addSerieToApiUserlist,
  editSerieToApiUserlist,
}) => {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [currentSeriesDetails, setCurrentSeriesDetails] = useState({});
  useEffect(() => {
    axios.get(`http://keskonmate.me/api/v1/series/${slug}`)
      .then((response) => {
        setCurrentSeriesDetails(response.data);
        findSerieInUserlist(slug);
        setIsLoading(false);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);
  return (
    <div className="detail-container">
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
            {!isConnected
            && <a href="/connection" className="connection-button">Connecte-toi </a>}
            {isConnected
            && (type === 1)
            && (
              <div className="type">
                <a
                  className="button"
                  onClick={() => {
                    editUserlistSerie(slug, 3);
                    editSerieToApiUserlist();
                  }}
                >
                  Déplacer vers ma liste [à voir]
                </a>
                <a
                  className="button"
                  onClick={() => {
                    editUserlistSerie(slug, 0);
                    editSerieToApiUserlist();
                  }}
                >
                  Supprimer de ma liste [déjà vu]
                </a>
              </div>
            )}
            {isConnected
            && (type === 2)
            && (
              <div className="type">
                <a
                  className="button"
                  onClick={() => {
                    editUserlistSerie(slug, 1);
                    editSerieToApiUserlist();
                  }}
                >
                  Déplacer vers ma liste [déjà vu]
                </a>
                <a
                  className="button"
                  onClick={() => {
                    editUserlistSerie(slug, 0);
                    editSerieToApiUserlist();
                  }}
                >
                  Supprimer de ma liste [en cours]
                </a>
              </div>
            )}
            {isConnected
            && (type === 3)
            && (
              <div className="type">
                <a
                  className="button"
                  onClick={() => {
                    editUserlistSerie(slug, 2);
                    editSerieToApiUserlist();
                  }}
                >
                  Déplacer vers ma liste [en cours]
                </a>
                <a
                  className="button"
                  onClick={() => {
                    editUserlistSerie(slug, 0);
                    editSerieToApiUserlist();
                  }}
                >
                  Supprimer de ma liste [à voir]
                </a>
              </div>
            )}
            {isConnected
            && (type === 0)
            && (
              <div className="type">
                <a
                  className="button"
                  onClick={() => {
                    addSerieToUserlist(
                      slug,
                      currentSeriesDetails.title,
                      currentSeriesDetails.image,
                      1,
                    );
                    addSerieToApiUserlist();
                  }}
                >
                  Ajouter à ma liste [déjà vu]
                </a>
                <a
                  className="button"
                  onClick={() => {
                    addSerieToUserlist(
                      slug,
                      currentSeriesDetails.title,
                      currentSeriesDetails.image,
                      2,
                    );
                    addSerieToApiUserlist();
                  }}
                >
                  Ajouter à ma liste [en cours]
                </a>
                <a
                  className="button"
                  onClick={() => {
                    addSerieToUserlist(
                      slug,
                      currentSeriesDetails.title,
                      currentSeriesDetails.image,
                      3,
                    );
                    addSerieToApiUserlist();
                  }}
                >
                  Ajouter à ma liste [à voir]
                </a>
              </div>
            )}
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
  findSerieInUserlist: PropTypes.func.isRequired,
  type: PropTypes.number.isRequired,
  addSerieToUserlist: PropTypes.func,
  editUserlistSerie: PropTypes.func,
  addSerieToApiUserlist: PropTypes.func,
  editSerieToApiUserlist: PropTypes.func,
};

Details.defaultProps = {
  addSerieToUserlist: () => {},
  editUserlistSerie: () => {},
  addSerieToApiUserlist: () => {},
  editSerieToApiUserlist: () => {},
};

// == Export
export default Details;
