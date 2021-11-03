import './styles.scss';
import PropTypes from 'prop-types';

const ListsButtons = ({ type }) => {
  if (type === 1) {
    return (
      <div className="type">
        <p className="list-name">Déjà vu</p>
        <a href="#" className="button">Revoir </a>
        <a href="#" className="button">Supprimer </a>
      </div>
    );
  }
  if (type === 2) {
    return (
      <div>
        type=2
      </div>
    );
  }

  if (type === 2) {
    return (
      <div>
        type=2
      </div>
    );
  }
  return (
    <div>
      <a className="add-list-button">A voir</a>
    </div>
  );
};

ListsButtons.propTypes = {
  type: PropTypes.number.isRequired,
};
export default ListsButtons;
