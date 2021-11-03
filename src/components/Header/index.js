import PropTypes from 'prop-types';
import './styles.scss';
import { Link } from 'react-router-dom';
import {
  User, List, Bookmark,
} from 'react-feather';
import logo from 'src/assets/logo.png';
import LoginForm from 'src/components/Header/LoginForm';
import SearchBar from './SearchBar';
import SearchBarMobile from './SearchBarMobile';
import UserDropdown from './UserDropdown';

const Header = ({ username, isConnected }) => (
  <div className="header">
    {/* Left part of the navbar : "Toutes les séries" + search bar */}
    <div className="left-navbar">
      <Link to="/series" className="series-link">
        Toutes les séries
      </Link>
      <a href="/series" className="series-icon">
        <List size="25" />
      </a>
      <SearchBar />
      <SearchBarMobile />
    </div>
    {/* Logo */}
    <Link to="/"><img src={logo} alt="logo" className="logo" style={{ height: '2em', width: 'auto' }}/></Link>
    {/* Right part of the navbar:
    "Mes listes"
    + username/"se connecter
    + connection form/myaccount and logout links" */}
    <div className="right-navbar">
      {isConnected && (
        <Link to="/mes-listes">
          <p className="list-link">Mes listes</p>
          <a href="/mes-listes" className="list-icon">
            <Bookmark size="25" />
          </a>
        </Link>
      )}

      <Link to="/mon-compte" className="user-account-link">
        {isConnected && (
          <p className="user-name">
            {username}
          </p>
        )}
        {!isConnected && (
          <p className="connection">
            Se connecter
          </p>
        )}
        <User size="25" className="user-icon" />
      </Link>
      <UserDropdown />
      {!isConnected && (
        <LoginForm />
      )}
    </div>
  </div>
);

Header.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Header;
