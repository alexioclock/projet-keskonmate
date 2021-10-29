import './styles.scss';

const HomeHeaderNotConnected = () => (
  <div className="home-header-not-connected">
    <div className="home-header-not-connected-text">
      <p className="line-one">
        Bienvenue sur keskonmate !
      </p>
      <p className="line-two">
        Un site qui a été pensé pour gérer le visionnage de vos séries et créer vos propres listes.
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
      <a href="/login">
        Connectez-vous
      </a>
    </div>
  </div>

);

export default HomeHeaderNotConnected;
