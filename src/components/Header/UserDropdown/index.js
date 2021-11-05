import { Link } from 'react-router-dom';
import './styles.scss';

const UserDropdown = () => (
  <div
    className="dropdown-content"
  >
    <Link to="/mon-compte">Mon compte</Link>
    <Link to="/">Déconnexion</Link>

  </div>

);

export default UserDropdown;
