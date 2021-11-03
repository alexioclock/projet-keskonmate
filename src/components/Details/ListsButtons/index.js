import './styles.scss';
import PropTypes from 'prop-types';

const ListsButtons = ({ watched }) => {
  console.log(watched);
  return (
    <div>

    </div>
  );
};

ListsButtons.propTypes = {
  type: PropTypes.number.isRequired,
};
export default ListsButtons;
