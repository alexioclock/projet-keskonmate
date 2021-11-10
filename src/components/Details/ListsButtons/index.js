import './styles.scss';
import PropTypes from 'prop-types';

const ListsButtons = ({
  id,
  title,
  image,
  type,
  addSerieToUserlist,
  editUserlistSerie,
  deleteUserlistSerie,
  addSerieToApiUserlist,
  editSerieToApiUserlist,
  deleteSerieToApiUserlist,
}) => {
  console.log(`Type de la page détails : ${type}`);
  if (type === 1) {
    return (
      <div className="type">
        <a
          className="button"
          onClick={() => {
            editUserlistSerie(id, 3);
            editSerieToApiUserlist();
          }}
        >
          Déplacer vers ma liste [à voir]
        </a>
        <a
          className="button"
          onClick={() => {
            deleteUserlistSerie(id);
            deleteSerieToApiUserlist();
          }}
        >
          Supprimer de ma liste [déjà vu]
        </a>
      </div>
    );
  }
  if (type === 2) {
    return (
      <div className="type">
        <a
          className="button"
          onClick={() => {
            editUserlistSerie(id, 1);
            editSerieToApiUserlist();
          }}
        >
          Déplacer vers ma liste [déjà vu]
        </a>
        <a
          className="button"
          onClick={() => {
            deleteUserlistSerie(id);
            deleteSerieToApiUserlist();
          }}
        >
          Supprimer de ma liste [en cours]
        </a>
      </div>
    );
  }
  if (type === 3) {
    return (
      <div className="type">
        <a
          className="button"
          onClick={() => {
            editUserlistSerie(id, 2);
            editSerieToApiUserlist();
          }}
        >
          Déplacer vers ma liste [en cours]
        </a>
        <a
          className="button"
          onClick={() => {
            deleteUserlistSerie(id);
            deleteSerieToApiUserlist();
          }}
        >
          Supprimer de ma liste [à voir]
        </a>
      </div>
    );
  }
  return (
    <div className="type">
      <a
        className="button"
        onClick={() => {
          addSerieToUserlist(id, title, image, 1);
          addSerieToApiUserlist();
        }}
      >
        Ajouter à ma liste [déjà vu]
      </a>
      <a
        className="button"
        onClick={() => {
          addSerieToUserlist(id, title, image, 2);
          addSerieToApiUserlist();
        }}
      >
        Ajouter à ma liste [en cours]
      </a>
      <a
        className="button"
        onClick={() => {
          addSerieToUserlist(id, title, image, 3);
          addSerieToApiUserlist();
        }}
      >
        Ajouter à ma liste [à voir]
      </a>
    </div>
  );
};

ListsButtons.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.number,
  addSerieToUserlist: PropTypes.func,
  editUserlistSerie: PropTypes.func,
  deleteUserlistSerie: PropTypes.func,
  addSerieToApiUserlist: PropTypes.func,
  editSerieToApiUserlist: PropTypes.func,
  deleteSerieToApiUserlist: PropTypes.func,
};

ListsButtons.defaultProps = {
  type: 0,
  addSerieToUserlist: () => {},
  editUserlistSerie: () => {},
  deleteUserlistSerie: () => {},
  addSerieToApiUserlist: () => {},
  editSerieToApiUserlist: () => {},
  deleteSerieToApiUserlist: () => {},
};

export default ListsButtons;
