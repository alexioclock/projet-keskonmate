import './styles.scss';
import { User, Search } from 'react-feather';

const Header = () => (
  <div className="header">
    <div className="left-navbar">
      <a href="/series" className="series-link">
        Toutes les séries
      </a>

      <form className="form">
        <input className="form-input"
          placeholder="Rechercher une série"
        />
        <button
          type="submit"
          className="form-submit"
        >
          <Search size="20" />
        </button>
      </form>
    </div>

    <h1 className="logo">
      KESKONMATE ?
    </h1>

    <div className="right-navbar">
      <a href="/list" className="list-link">
        Mes listes
      </a>

      <p className="user-name">
        Utilisateur
      </p>

      <a href="/user" className="user-account-link">
        <User className="user-icon" />
      </a>
    </div>

  </div>
);

export default Header;
