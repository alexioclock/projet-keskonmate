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
  toggleOpen,
  isOpen,
}) => (
  <div className="series-card-div">
    {/* Grille de SeriesCard */}
    <Card className="series-card">
      <Image className="series-card-image" src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
      <div className="series-card-icons-list">
        {
          (isSuggestionsList || isCatalogue)
          && (
          <div className="series-card-icon-add-div">
            <div className={isOpen ? 'series-card-icon-add-dropdown--open' : 'series-card-icon-add-dropdown'}>
              <ul className="series-card-icon-add-dropdown-list">
                <li className="series-card-icon-add-dropdown-list-item">
                  Ajouter à ma liste [à voir]
                </li>
                <li className="series-card-icon-add-dropdown-list-item">
                  Ajouter à ma liste [en cours]
                </li>
                <li className="series-card-icon-add-dropdown-list-item">
                  Ajouter à ma liste [déjà vu]
                </li>
              </ul>
            </div>
            <Plus
              // id={`series-card-icon-${id}`}
              className="series-card-icon series-card-icon-add"
              strokeWidth={1.2}
              size={35}
              onClick={() => {
                // console.log(event.target.id);
                toggleOpen();
              }}
            />
          </div>
          )
        }
        {
          (isHomeCurrentList
          || isHomeToWatchList
          || isUserToWatchList
          || isUserCurrentList
          || isUserWatchedList
          || isCatalogue)
          && (
          <div className="series-card-icon-edit-div">
            <div className="series-card-icon-edit-dropdown">
              <ul className="series-card-icon-edit-dropdown-list">
                {
                  (isUserCurrentList
                  || isUserWatchedList
                  || isCatalogue)
                  && (
                  <li className="series-card-icon-edit-dropdown-list-item">
                    Déplacer vers ma liste [à voir]
                  </li>
                  )
                }
                {
                  (isHomeToWatchList
                  || isUserToWatchList
                  || isUserWatchedList
                  || isCatalogue)
                  && (
                  <li className="series-card-icon-edit-dropdown-list-item">
                    Déplacer vers ma liste [en cours]
                  </li>
                  )
                }
                {
                  (isHomeCurrentList
                  || isUserCurrentList
                  || isUserToWatchList
                  || isCatalogue)
                  && (
                  <li className="series-card-icon-edit-dropdown-list-item">
                    Déplacer vers ma liste [déjà vu]
                  </li>
                  )
                }
              </ul>
            </div>
            <Edit2 className="series-card-icon series-card-icon-edit" strokeWidth={1.2} size={35} />
          </div>
          )
        }
        <div className="series-card-icon-delete-div">
          <Trash2 className="series-card-icon series-card-icon-delete" strokeWidth={1.2} size={35} />
        </div>
      </div>
      <Card.Content className="series-card-content">
        <Link to={`/series/${id}`}>
          <Card.Header className="series-card-header">{ title }</Card.Header>
          <Card.Description className="series-card-description">
            {
              (isCatalogue)
              && (
                <ul className="series-card-description-list">
                  <li className="series-card-description-list-item">Sortie en { releaseDate.substring(0, 4) }</li>
                  <li className="series-card-description-list-item">{genre.map((item) => (`${item.name}, `))}</li>
                  {
                    (director !== '')
                    && <li className="series-card-description-list-item">Réalisée par { director }</li>
                  }
                  {
                    (isCatalogue)
                    && (
                      <li className="series-card-description-list-item">
                        avec {actor.map((item) => ((`${item.firstname} ${item.lastname}, `)))}
                      </li>
                    )
                  }
                </ul>
              )
            }
          </Card.Description>
        </Link>
        {
          (isUserCurrentList)
          && (
            <form className="info-form">
              <input type="text" placeholder="Saison n°" />
              <input type="text" placeholder="Episode n°" />
            </form>
          )
        }
      </Card.Content>
    </Card>
  </div>
);

SeriesCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string,
  director: PropTypes.string,
  genre: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string
    }),
  ),
  actor: PropTypes.arrayOf(
    PropTypes.shape({
      firstname: PropTypes.string,
      lastname: PropTypes.string,
    }),
  ),
  isHomeToWatchList: PropTypes.bool,
  isHomeCurrentList: PropTypes.bool,
  isSuggestionsList: PropTypes.bool,
  isCatalogue: PropTypes.bool,
  isUserToWatchList: PropTypes.bool,
  isUserCurrentList: PropTypes.bool,
  isUserWatchedList: PropTypes.bool,
  toggleOpen: PropTypes.func,
  isOpen: PropTypes.bool,
};

SeriesCard.defaultProps = {
  releaseDate: '',
  director: '',
  genre: [],
  actor: [],
  isHomeToWatchList: false,
  isHomeCurrentList: false,
  isSuggestionsList: false,
  isCatalogue: false,
  isUserToWatchList: false,
  isUserCurrentList: false,
  isUserWatchedList: false,
  toggleOpen: () => {},
  isOpen: false,
};

// };
// == Export
export default SeriesCard;
