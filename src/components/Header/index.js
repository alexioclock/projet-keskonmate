import './styles.scss';
import {
  User, List, Bookmark,
} from 'react-feather';
import logo from 'src/assets/logo.png';
import SearchBar from './SearchBar';
import SearchBarMobile from './SearchBarMobile';
import LoginForm from './LoginForm';
import UserDropdown from './UserDropdown';

const Header = () => (
  <div className="header">
    {/* Left part of the navbar : "Toutes les séries" + search bar */}
    <div className="left-navbar">
      <a href="/series" className="series-link">
        Toutes les séries
      </a>
      <a href="/series" className="series-icon">
        <List size="25" />
      </a>

      <SearchBar />
      <SearchBarMobile />
    </div>

    {/* Logo */}
    <img src={logo} alt="logo" className="logo" />

    {/* Right part of the navbar:
    "Mes listes"
    + username/"se connecter
    + connection form/myaccount and logout links" */}
    <div className="right-navbar">
      <a href="/list" className="list-link">
        Mes listes
      </a>
      <a href="/list" className="list-icon">
        <Bookmark size="25" />
      </a>

      <a href="/user" className="user-account-link">
        <p className="user-name">
          Utilisateur
        </p>

        <p className="connection">
          Se connecter
        </p>
        <User size="25" className="user-icon" />
      </a>
      <UserDropdown />

      <LoginForm />

    </div>

  </div>
);

export default Header;
