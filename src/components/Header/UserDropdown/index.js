import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import './styles.scss';

const UserDropdown = ({ logout }) => (
  <div
    className="dropdown-content"
  >
    <Link to="/mon-compte">Mon compte</Link>
    <Link to="/" onClick={logout}>Déconnexion</Link>

  </div>

);

UserDropdown.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default UserDropdown;
