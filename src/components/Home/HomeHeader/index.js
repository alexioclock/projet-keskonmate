import PropTypes from 'prop-types';
import { useState } from 'react';
import './styles.scss';
import LoginForm from 'src/components/Header/LoginForm';

const HomeHeader = ({ isConnected, username }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="home-header">
      {!isConnected && (
      <div className="home-header-not-connected">
        <div className="home-header-not-connected-text">
          <p className="line-one">
            Bienvenue sur keskonmate !
          </p>
          <p className="line-two">
            Un site qui a été pensé pour gérer le visionnage de vos séries
            et créer vos propres listes.
          </p>
        </div>
        <div className="home-header-not-connected-links">
          <a href="/inscription">
            Inscrivez-vous
          </a>
          &nbsp;pour commencer vos listes !
          <p>
            ou
          </p>
          <button
            type="button"
            className="connection"
            onClick={() => {
              setIsDropdownOpen(!isDropdownOpen);
            }}
          >
            Connectez-vous
          </button>
        </div>
        {isDropdownOpen && (
        <LoginForm />
        )}
      </div>
      )}
      {isConnected && (
      <div className="home-header-connected">
        <p className="home-header-connected-first-line">
          Salut {username} !
        </p>
        <p className="home-header-connected-second-line">
          Alors, keskonmate ?
        </p>
      </div>
      )}
    </div>
  );
};
HomeHeader.propTypes = {
  isConnected: PropTypes.bool.isRequired,
  username: PropTypes.string,
};

HomeHeader.defaultProps = {
  username: '',
};

export default HomeHeader;
