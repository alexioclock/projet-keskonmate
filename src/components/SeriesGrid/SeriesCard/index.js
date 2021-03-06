import { useState } from 'react';
import { Plus, Trash2, Edit2 } from 'react-feather';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Card, Image } from 'semantic-ui-react';

import './styles.scss';

const SeriesCard = ({
  id,
  title,
  releaseDate,
  director,
  image,
  genre,
  isHomeToWatchList,
  isHomeCurrentList,
  isSuggestionsList,
  isCatalogue,
  isUserToWatchList,
  isUserCurrentList,
  isUserWatchedList,
  type,
  userlistId,
  currentSeason,
  currentEpisode,
  addSerieToApiUserlist,
  editSerieToApiUserlist,
  isConnected,
  openLoginForm,
}) => {
  const [isAddDropdownOpen, setIsAddDropdownOpen] = useState(false);
  const [isEditDropdownOpen, setIsEditDropdownOpen] = useState(false);
  const [isDeleteDropdownOpen, setIsDeleteDropdownOpen] = useState(false);
  return (
    <div className="series-card-div">
      <Card className="series-card">
        <Image className="series-card-image" src={image} />
        <div className="series-card-icons-list">
          {
            ((isSuggestionsList || isCatalogue) && type === 0)
            && (
            <div className="series-card-icon-add-div">
              <div className={isAddDropdownOpen ? 'series-card-icon-add-dropdown--open' : 'series-card-icon-add-dropdown'}>
                {(!isConnected) && (
                  <ul className="series-card-icon-add-dropdown-list">
                    <button
                      type="button"
                      className="series-card-icon-add-dropdown-list-item"
                      onClick={() => {
                        openLoginForm();
                      }}
                    >
                      Connecte-toi
                    </button>
                  </ul>
                )}
                {(isConnected) && (
                  <ul className="series-card-icon-add-dropdown-list">
                    <button
                      type="button"
                      className="series-card-icon-add-dropdown-list-item"
                      onClick={() => {
                        addSerieToApiUserlist(id, title, image, 1);
                        setIsAddDropdownOpen(false);
                      }}
                    >
                      Ajouter ?? ma liste [d??j?? vu]
                    </button>
                    <button
                      type="button"
                      className="series-card-icon-add-dropdown-list-item"
                      onClick={() => {
                        addSerieToApiUserlist(id, title, image, 2);
                        setIsAddDropdownOpen(false);
                      }}
                    >
                      Ajouter ?? ma liste [en cours]
                    </button>
                    <button
                      type="button"
                      className="series-card-icon-add-dropdown-list-item"
                      onClick={() => {
                        addSerieToApiUserlist(id, title, image, 3);
                        setIsAddDropdownOpen(false);
                      }}
                    >
                      Ajouter ?? ma liste [?? voir]
                    </button>
                  </ul>
                )}
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
                        editSerieToApiUserlist(userlistId, 1, currentSeason, currentEpisode);
                        setIsEditDropdownOpen(false);
                      }}
                    >
                      D??placer vers ma liste [d??j?? vu]
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
                        editSerieToApiUserlist(userlistId, 2, currentSeason, currentEpisode);
                        setIsEditDropdownOpen(false);
                      }}
                    >
                      D??placer vers ma liste [en cours]
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
                        editSerieToApiUserlist(userlistId, 3, currentSeason, currentEpisode);
                        setIsEditDropdownOpen(false);
                      }}
                    >
                      D??placer vers ma liste [?? voir]
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
                          editSerieToApiUserlist(userlistId, 0, currentSeason, currentEpisode);
                          setIsDeleteDropdownOpen(false);
                        }}
                      >
                        Supprimer de ma liste [d??j?? vu]
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
                          editSerieToApiUserlist(userlistId, 0, currentSeason, currentEpisode);
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
                          editSerieToApiUserlist(userlistId, 0, currentSeason, currentEpisode);
                          setIsDeleteDropdownOpen(false);
                        }}
                      >
                        Supprimer de ma liste [?? voir]
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
                  <li className="series-card-description-list-item release-date">Sortie en { releaseDate.substring(0, 4) }</li>
                  <li className="series-card-description-list-item genre">{genre.map((item) => (`${item.name}, `))}</li>
                  {
                    (director !== '')
                    && <li className="series-card-description-list-item">R??alis??e par { director }</li>
                  }
                </ul>
              )
            }
          </Card.Description>
          {
            (isUserCurrentList)
            && (
              <form className="info-form">
                <label htmlFor="season-nb">Saison
                  <input
                    className="season-nb"
                    type="text"
                    placeholder="n??"
                    name="season-nb"
                    value={currentSeason}
                    onChange={(event) => {
                      editSerieToApiUserlist(userlistId, type, event.target.value, currentEpisode);
                    }}
                  />
                </label>

                <label htmlFor="episode-nb">Episode
                  <input
                    type="text"
                    placeholder="n??"
                    name="episode-nb"
                    value={currentEpisode}
                    onChange={(event) => {
                      editSerieToApiUserlist(userlistId, type, currentSeason, event.target.value);
                    }}
                  />
                </label>

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
  image: PropTypes.string,
  isHomeToWatchList: PropTypes.bool,
  isHomeCurrentList: PropTypes.bool,
  isSuggestionsList: PropTypes.bool,
  isCatalogue: PropTypes.bool,
  isUserToWatchList: PropTypes.bool,
  isUserCurrentList: PropTypes.bool,
  isUserWatchedList: PropTypes.bool,
  type: PropTypes.number,
  userlistId: PropTypes.number,
  currentEpisode: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  currentSeason: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  addSerieToApiUserlist: PropTypes.func,
  editSerieToApiUserlist: PropTypes.func,
  isConnected: PropTypes.bool.isRequired,
  openLoginForm: PropTypes.func.isRequired,
};

SeriesCard.defaultProps = {
  releaseDate: '',
  director: '',
  genre: [],
  image: '',
  isHomeToWatchList: false,
  isHomeCurrentList: false,
  isSuggestionsList: false,
  isCatalogue: false,
  isUserToWatchList: false,
  isUserCurrentList: false,
  isUserWatchedList: false,
  type: 0,
  userlistId: 0,
  currentEpisode: 0,
  currentSeason: 0,
  addSerieToApiUserlist: () => {},
  editSerieToApiUserlist: () => {},
};

export default SeriesCard;
