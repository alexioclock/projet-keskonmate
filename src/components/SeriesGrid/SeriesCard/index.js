import { useState } from 'react';
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
  image,
  isHomeToWatchList,
  isHomeCurrentList,
  isSuggestionsList,
  isCatalogue,
  isUserToWatchList,
  isUserCurrentList,
  isUserWatchedList,
  type,
  currentSeason,
  currentEpisode,
  addSerieToUserlist,
  editUserlistSerie,
  deleteUserlistSerie,
  changeCurrentSeason,
  changeCurrentEpisode,
}) => {
  const [isAddDropdownOpen, setIsAddDropdownOpen] = useState(false);
  const [isEditDropdownOpen, setIsEditDropdownOpen] = useState(false);
  const [isDeleteDropdownOpen, setIsDeleteDropdownOpen] = useState(false);
  return (
    <div className="series-card-div">
      {/* Grille de SeriesCard */}
      <Card className="series-card">
        <Image className="series-card-image" src={image} />
        <div className="series-card-icons-list">
          {
            ((isSuggestionsList || isCatalogue) && type === 0)
            && (
            <div className="series-card-icon-add-div">
              <div className={isAddDropdownOpen ? 'series-card-icon-add-dropdown--open' : 'series-card-icon-add-dropdown'}>
                <ul className="series-card-icon-add-dropdown-list">
                  <button
                    type="button"
                    className="series-card-icon-add-dropdown-list-item"
                    onClick={() => {
                      addSerieToUserlist(id, title, 1);
                      setIsAddDropdownOpen(false);
                    }}
                  >
                    Ajouter à ma liste [déjà vu]
                  </button>
                  <button
                    type="button"
                    className="series-card-icon-add-dropdown-list-item"
                    onClick={() => {
                      addSerieToUserlist(id, title, 2);
                      setIsAddDropdownOpen(false);
                    }}
                  >
                    Ajouter à ma liste [en cours]
                  </button>
                  <button
                    type="button"
                    className="series-card-icon-add-dropdown-list-item"
                    onClick={() => {
                      addSerieToUserlist(id, title, 3);
                      setIsAddDropdownOpen(false);
                    }}
                  >
                    Ajouter à ma liste [à voir]
                  </button>
                </ul>
              </div>
              <Plus
                className="series-card-icon series-card-icon-add"
                strokeWidth={1.2}
                size={35}
                onClick={() => setIsAddDropdownOpen(!isAddDropdownOpen)}
              />
            </div>
            )
          }
          {
            ((isHomeCurrentList
            || isHomeToWatchList
            || isUserToWatchList
            || isUserCurrentList
            || isUserWatchedList
            || isCatalogue)
            && type !== 0)
            && (
            <div className="series-card-icon-edit-div">
              <div className={isEditDropdownOpen ? 'series-card-icon-edit-dropdown--open' : 'series-card-icon-edit-dropdown'}>
                <ul className="series-card-icon-edit-dropdown-list">
                  {
                    (type === 2
                    || type === 3)
                    && (
                    <button
                      type="button"
                      className="series-card-icon-edit-dropdown-list-item"
                      onClick={() => {
                        editUserlistSerie(id, 1);
                        setIsEditDropdownOpen(false);
                      }}
                    >
                      Déplacer vers ma liste [déjà vu]
                    </button>
                    )
                  }
                  {
                    (type === 1
                    || type === 3)
                    && (
                    <button
                      type="button"
                      className="series-card-icon-edit-dropdown-list-item"
                      onClick={() => {
                        editUserlistSerie(id, 2);
                        setIsEditDropdownOpen(false);
                      }}
                    >
                      Déplacer vers ma liste [en cours]
                    </button>
                    )
                  }
                  {
                    (type === 1
                    || type === 2)
                    && (
                    <button
                      type="button"
                      className="series-card-icon-edit-dropdown-list-item"
                      onClick={() => {
                        editUserlistSerie(id, 3);
                        setIsEditDropdownOpen(false);
                      }}
                    >
                      Déplacer vers ma liste [à voir]
                    </button>
                    )
                  }
                </ul>
              </div>
              <Edit2
                className="series-card-icon series-card-icon-edit"
                strokeWidth={1.2}
                size={35}
                onClick={() => setIsEditDropdownOpen(!isEditDropdownOpen)}
              />
            </div>
            )
          }
          {
            (type === 1
            || type === 2
            || type === 3)
            && (
              <div className="series-card-icon-delete-div">
                <div className={isDeleteDropdownOpen ? 'series-card-icon-delete-dropdown--open' : 'series-card-icon-delete-dropdown'}>
                  <ul className="series-card-icon-delete-dropdown-list">
                    {
                      (type === 1)
                      && (
                      <button
                        type="button"
                        className="series-card-icon-delete-dropdown-list-item"
                        onClick={() => {
                          deleteUserlistSerie(id);
                          setIsDeleteDropdownOpen(false);
                        }}
                      >
                        Supprimer de ma liste [déjà vu]
                      </button>
                      )
                    }
                    {
                      (type === 2)
                      && (
                      <button
                        type="button"
                        className="series-card-icon-delete-dropdown-list-item"
                        onClick={() => {
                          deleteUserlistSerie(id);
                          setIsDeleteDropdownOpen(false);
                        }}
                      >
                        Supprimer de ma liste [en cours]
                      </button>
                      )
                    }
                    {
                      (type === 3)
                      && (
                      <button
                        type="button"
                        className="series-card-icon-delete-dropdown-list-item"
                        onClick={() => {
                          deleteUserlistSerie(id);
                          setIsDeleteDropdownOpen(false);
                        }}
                      >
                        Supprimer de ma liste [à voir]
                      </button>
                      )
                    }
                  </ul>
                </div>
                <Trash2
                  className="series-card-icon series-card-icon-delete"
                  strokeWidth={1.2}
                  size={35}
                  onClick={() => setIsDeleteDropdownOpen(!isDeleteDropdownOpen)}
                />
              </div>
            )
          }
        </div>
        <Card.Content className="series-card-content">
          <Link to={`/series/${id}`}>
            <Card.Header className="series-card-header">{title}</Card.Header>
          </Link>
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
                        avec {actor.map((item) => ((`${item.name}, `)))}
                      </li>
                    )
                  }
                </ul>
              )
            }
          </Card.Description>
          {
            (isUserCurrentList)
            && (
              <form className="info-form">
                <div>
                  <label htmlFor="season-nb">Saison
                    <input
                      type="text"
                      placeholder="n°"
                      name="season-nb"
                      value={currentSeason}
                      onChange={(event) => {
                        changeCurrentSeason(id, event.target.value);
                      }}
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="episode-nb">Episode
                    <input
                      type="text"
                      placeholder="n°"
                      name="episode-nb"
                      value={currentEpisode}
                      onChange={(event) => {
                        changeCurrentEpisode(id, event.target.value);
                      }}
                    />
                  </label>
                </div>
              </form>
            )
          }
        </Card.Content>
      </Card>
    </div>
  );
};

SeriesCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string,
  director: PropTypes.string,
  genre: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ),
  actor: PropTypes.arrayOf(
    PropTypes.shape({
      firstname: PropTypes.string,
      lastname: PropTypes.string,
    }),
  ),
  image: PropTypes.string.isRequired,
  isHomeToWatchList: PropTypes.bool,
  isHomeCurrentList: PropTypes.bool,
  isSuggestionsList: PropTypes.bool,
  isCatalogue: PropTypes.bool,
  isUserToWatchList: PropTypes.bool,
  isUserCurrentList: PropTypes.bool,
  isUserWatchedList: PropTypes.bool,
  type: PropTypes.number,
  currentEpisode: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  currentSeason: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  addSerieToUserlist: PropTypes.func,
  editUserlistSerie: PropTypes.func,
  deleteUserlistSerie: PropTypes.func,
  changeCurrentSeason: PropTypes.func,
  changeCurrentEpisode: PropTypes.func,
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
  type: 0,
  currentEpisode: 0,
  currentSeason: 0,
  addSerieToUserlist: () => {},
  editUserlistSerie: () => {},
  deleteUserlistSerie: () => {},
  changeCurrentSeason: () => {},
  changeCurrentEpisode: () => {},
};

// };
// == Export
export default SeriesCard;
