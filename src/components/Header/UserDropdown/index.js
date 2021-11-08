import { Link } from 'react-router-dom';
import './styles.scss';

const UserDropdown = ( {logout} ) => (
  <div
    className="dropdown-content"
  >
    <Link to="/mon-compte">Mon compte</Link>
    <Link to="/" onClick={logout}>Déconnexion</Link>

  </div>

);

export default UserDropdown;
