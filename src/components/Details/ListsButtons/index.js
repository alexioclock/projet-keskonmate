import './styles.scss';
import PropTypes from 'prop-types';

const ListsButtons = ({ type }) => {
  if (type === 1) {
    return (
      <div className="type">
        <a href="#" className="button">Déplacer vers ma liste [à voir] </a>
        <a href="#" className="button">Supprimer de ma liste [déjà vu] </a>
      </div>
    );
  }
  if (type === 2) {
    return (
      <div className="type">
        <a href="#" className="button">Déplacer vers ma liste [déjà vu] </a>
        <a href="#" className="button">Supprimer de ma liste [en cours] </a>
      </div>
    );
  }
  if (type === 3) {
    return (
      <div className="type">
        <a href="#" className="button">Déplacer vers ma liste [en cours] </a>
        <a href="#" className="button">Supprimer de ma liste [à voir] </a>
      </div>
    );
  }
  return (
    <div className="type">
      <a href="#" className="button">Ajouter à ma liste déjà vu </a>
      <a href="#" className="button">Ajouter à ma liste en cours </a>
      <a href="#" className="button">Ajouter à ma liste à voir </a>
    </div>
  );
};

ListsButtons.propTypes = {
  type: PropTypes.number.isRequired,
};

export default ListsButtons;
