// Composants

// Style
import './styles.scss';

// == Composant
const ProfilePage = () => (
  <div className="profile-page">
    <h1 className="profile-page-title">Mon profil</h1>
    <div className="profile-page-container">
      <h2 className="profile-page-subtitle">Mon pseudo</h2>
      {/* value permet de préremplir le champ avec les données de l'utilisateur :
      TODO le rendre dynamique avec les données reçues */}
      <p>Pseudo</p>
    </div>
    <div className="profile-page-container">
      <h2 className="profile-page-subtitle">Mon email</h2>
      {/* value permet de préremplir le champ avec les données de l'utilisateur :
      TODO le rendre dynamique avec les données reçues */}
      <p>example@keskonmate.io</p>
    </div>
    {/* Il faudra y mettre la route vers l'API qui édite un utilisateur */}
    <form action="/" method="post" className="profile-page-container-input">
      <h2 className="form-title profile-page-subtitle">Je veux changer mon mot de passe</h2>
      <div className="old-password-container">
        <h3 className="old-password-title form-subtitle">Saisir l'ancien mot de passe</h3>
        <input type="password" id="password" name="password" placeholder="Ancien mot de passe" />
      </div>
      <div className="password-container">
        <h3 className="password-title form-subtitle">Saisir le nouveau mot de passe</h3>
        <input type="password" id="password" name="password" placeholder="Nouveau mot de passe" />
      </div>
      <div className="password-validation-container">
        <h3 className="password-validation-title form-subtitle">Confirmer le nouveau mot de passe</h3>
        <input type="password" id="password-validation" name="password-validation" placeholder="Confirmer" />
      </div>
      <button className="validation-button" type="submit">Valider</button>
    </form>
  </div>
);

// == Export
export default ProfilePage;
