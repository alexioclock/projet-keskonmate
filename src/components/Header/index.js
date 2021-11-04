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
    <div className="navbar">
      <div className="series">
        <Link to="/series" className="series-link">
          Toutes les séries
        </Link>
        <a href="/series" className="series-icon">
          <List />
        </a>
      </div>

      <div className="searchbar">
        <SearchBar />
        <SearchBarMobile />
      </div>

      <Link to="/" className="link-logo">
        <img src={logo} alt="logo" className="logo" style={{ height: '2em', width: 'auto' }} />
      </Link>

      <div className="lists">
        {isConnected && (
          <Link to="/mes-listes">
            <p className="list-link">Mes listes</p>
            <Bookmark className="list-icon" />
          </Link>
        )}
      </div>

      <Link to="/mon-compte" className="account">
        {isConnected && (
        <div className="isConnected-links">
          <p className="user-name">
            {username}
          </p>
          <User className="user-icon" />
        </div>
        )}
        {!isConnected && (
        <div className="isNotConnected-links">
          <p className="connection">
            Se connecter
          </p>
          <User className="user-icon" />
        </div>
        )}
      </Link>

    </div>

    <div className="dropdown">
      <UserDropdown />
      {!isConnected && (
        <LoginForm />
      )}
    </div>

  </div>
);

Header.propTypes = {
  username: PropTypes.string.isRequired,
  isConnected: PropTypes.bool.isRequired,
};

export default Header;
