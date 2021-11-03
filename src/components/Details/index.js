// == Import
import PropTypes from 'prop-types';
import './styles.scss';
import { Card, Image } from 'semantic-ui-react';
import Poster from 'src/assets/pictures/squid-game.jpg';

const Details = ({ serie,isConnected }) => (
  <div className="detail-container">
    <div className="banner-container">
      {/* Poster à changer quand on aura l'url de l'image depuis l'API */}
      <img className="poster" src={Poster} alt="" />
      <h1>{serie.title}</h1>
      <p className="resume-for-desktop">{serie.synopsis}</p>
      { isConnected ? <a className="add-list-button">Ajouter à ma liste + </a> : <a className="add-list-button">Connecte-toi pour ajouter la série</a>}
    </div>

    <div className="genre-list">
      <ul className="ul-genre">
        {serie.genre.map((genre) => (
          <li className="li-genre" key={genre.id}><a href="/">{genre.name}</a></li>
        ))}
      </ul>
    </div>
    <div className="resume">
      <h3>Résumé</h3>
      <p>{serie.synopsis}</p>
    </div>
    <div className="actors-container">
      <h3>Acteurs Principaux</h3>
      <ul className="ul-actors">
        {serie.actor.map((actor) => (
          <li className="li-actors" key={actor.id}>
            <Card style={{ width: '9em', height: 'auto' }}>
              <Image src={actor} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{actor.firstname} {actor.lastname}</Card.Header>
              </Card.Content>
            </Card>
          </li>
        ))}
      </ul>
    </div>

    <div className="seasons-container">
      <h3>Saisons</h3>
      <ul className="ul-seasons">
        {serie.season.map((season) => (
          <li className="li-seasons" key={season.id}>
            <Card style={{ width: '10em', height: 'auto' }}>
              <Image src="" wrapped ui={false} style={{ width: '150px', height: 'auto'}}/>
              <Card.Content>
                <Card.Header>Saison {season.seasonNumber}</Card.Header>
              </Card.Content>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

Details.propTypes = {
  serie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired,
    genre: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
    actor: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstname: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
    season: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        seasonNumber: PropTypes.number.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
  isConnected: PropTypes.bool.isRequired,
};
// == Export
export default Details;
