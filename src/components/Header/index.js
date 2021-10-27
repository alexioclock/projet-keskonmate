import './styles.scss';
import { User, Search, List, Bookmark } from 'react-feather';
import logo from 'src/assets/logo.png';

const Header = () => (
  <div className="header">
    <div className="left-navbar">
      <a href="/series" className="series-link">
        Toutes les séries
      </a>
      <a href="/series" className="series-icon">
        <List size="30" />
      </a>

      {/* Form for the desktop */}

      <form className="form">
        <input
          className="form-input"
          placeholder="Que recherchez-vous ?"
        />
        <button
          type="submit"
          className="form-submit"
        >
          <Search size="20" />
        </button>
      </form>

      {/* Form for the mobile that appear when you click on the search icon
      It replaces all the header */}
      <div className="form-mobile-element">
        <form className="form-mobile">
          <input
            className="form-mobile-input"
            placeholder="Que recherchez-vous ?"
          />
          <button
            type="submit"
            className="form-mobile-submit"
          >
            <Search size="20" />
          </button>
        </form>
      </div>

      {/* OnClick: the form-mobile appears */}
      <button
        type="button"
        className="form-display"
      >
        <Search size="30" />
      </button>

    </div>

    <img src={logo} alt="logo" className="logo" />

    <div className="right-navbar">
      <a href="/list" className="list-link">
        Mes listes
      </a>

      <a href="/list" className="list-icon">
        <Bookmark size="30" />
      </a>

      <p className="user-name">
        Utilisateur
      </p>

      <a href="/user" className="user-account-link">
        <User size="30" />
      </a>
    </div>

  </div>
);

export default Header;
