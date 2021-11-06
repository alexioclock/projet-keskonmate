import PropTypes from 'prop-types';
import { useState } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import {
  User, List, Bookmark,
} from 'react-feather';
import logo from 'src/assets/logo.png';
import LoginForm from 'src/containers/Header/LoginForm';
import UserDropdown from 'src/components/Header/UserDropdown';
import SearchBar from './SearchBar';
import SearchBarMobile from './SearchBarMobile';

const Header = ({username, isConnected}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
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

        {isConnected && (
        <div className="isConnected-links">
          <button
            className="account-button"
            type="button"
            onClick={() => {
              setIsDropdownOpen(!isDropdownOpen);
            }}
          >
            <p className="user-name">
              {username}
            </p>
            <User className="user-icon" width={30} />
          </button>
        </div>
        )}
        {!isConnected && (
        <div className="isNotConnected-links">
          <button
            className="account-button"
            type="button"
            onClick={() => {
              setIsDropdownOpen(!isDropdownOpen);
            }}
          >
            <p className="connection">
              Se connecter
            </p>
            <User className="user-icon" width={30} />
          </button>
        </div>
        )}

      </div>

      {isDropdownOpen && (
        <div className="dropdown">
          {isConnected && (
          <UserDropdown />
          )}
          {!isConnected && (
          <LoginForm />
          )}
        </div>
      )}

    </div>
  );
};
Header.propTypes = {
  username: PropTypes.string.isRequired,
  isConnected: PropTypes.bool.isRequired,
};

export default Header;
