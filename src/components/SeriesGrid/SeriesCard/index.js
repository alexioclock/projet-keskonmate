import { Plus, Trash2, Edit2 } from 'react-feather';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Style
import './styles.scss';

// == Composant
const SeriesCard = ({
  id,
  title,
  releaseDate,
  director,
  genre,
  actor,
  isHomeToWatchList,
  isHomeCurrentList,
  isSuggestionsList,
  isCatalogue,
  isUserToWatchList,
  isUserCurrentList,
  isUserWatchedList,
}) => (
  <div className="series-card-div">
    {/* Grille de SeriesCard */}
    {/* style={{ display: 'none' }} */}
    <Card className="series-card">
      <Image className="series-card-image" src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
      <div className="series-card-icons-list">
        <div className="series-card-icon-add-div">
          <div className="series-card-icon-add-dropdown" style={{ display: 'none' }}>
            <ul className="series-card-icon-add-dropdown-list">
              <li className="series-card-icon-add-dropdown-list-item series-card-icon-add-dropdown-list-item-to-watch">
                Ajouter à la liste "A voir"
              </li>
              <li className="series-card-icon-add-dropdown-list-item series-card-icon-add-dropdown-list-item-current">
                Ajouter à la liste "En cours"
              </li>
              <li className="series-card-icon-add-dropdown-list-item series-card-icon-add-dropdown-list-item-watched">
                Ajouter à la liste "Déjà vues"
              </li>
            </ul>
          </div>
          <Plus className="series-card-icon series-card-icon-add" strokeWidth={1.2} size={35} />
        </div>
        <div className="series-card-icon-edit-div">
          <div className="series-card-icon-edit-dropdown" style={{ display: 'none' }}>
            <ul className="series-card-icon-edit-dropdown-list">
              <li className="series-card-icon-edit-dropdown-list-item series-card-icon-edit-dropdown-list-item-to-watch">
                Déplacer vers la liste "A voir"
              </li>
              <li className="series-card-icon-edit-dropdown-list-item series-card-icon-edit-dropdown-list-item-current">
                Déplacer vers la liste "En cours"
              </li>
              <li className="series-card-icon-edit-dropdown-list-item series-card-icon-edit-dropdown-list-item-watched">
                Déplacer vers la liste "Déjà vues"
              </li>
            </ul>
          </div>
          <Edit2 className="series-card-icon series-card-icon-edit" strokeWidth={1.2} size={35} />
        </div>
        <div className="series-card-icon-delete-div">
          <Trash2 className="series-card-icon series-card-icon-delete" strokeWidth={1.2} size={35} />
        </div>
      </div>
      <Link to={`/series/${id}`}>
        <Card.Content className="series-card-content">
          <Card.Header className="series-card-header">{ title }</Card.Header>
          <Card.Description className="series-card-description">
            <ul className="series-card-description-list">
              <li className="series-card-description-list-item">Sortie en { releaseDate.substring(0, 4) }</li>
              <li className="series-card-description-list-item">{genre.map((item) => (`${item.name}, `))}</li>
              { director !== ''
                && <li className="series-card-description-list-item">Réalisée par { director }</li>}
              <li className="series-card-description-list-item">avec {actor.map((item) => ((`${item.firstname} ${item.lastname}, `)))}</li>
            </ul>
            <form className="info-form" style={{ display: 'none' }}>
              <input type="number" placeholder="Saison n°" />
              <input type="number" placeholder="Episode n°" />
            </form>
          </Card.Description>
        </Card.Content>
      </Link>
    </Card>
  </div>
);

SeriesCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  genre: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  actor: PropTypes.arrayOf(
    PropTypes.shape({
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default SeriesCard;
