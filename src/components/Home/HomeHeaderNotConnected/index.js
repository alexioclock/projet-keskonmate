import './styles.scss';

const HomeHeaderNotConnected = () => (
  <div className="home-header-not-connected">
    <p className="home-header-not-connected-text">
      Bienvenue sur keskonmate !
    </p>
    <p className="home-header-not-connected-text ">
      Un site qui a été pensé pour gérer le visionnage de vos séries et créer vos propres listes.
    </p>
    <p className="home-header-not-connected-links">
      <a href="/inscription">
        Inscrivez-vous
      </a>
      &nbsp;pour commencer vos listes !
    </p>
    <p>
      ou
    </p>
    <p className="home-header-not-connected-links">
      <a href="/login">
        Connectez-vous
      </a>
      &nbsp;pour consulter vos listes !
    </p>
  </div>

);

export default HomeHeaderNotConnected;
