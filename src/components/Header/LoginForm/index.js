import './styles.scss';

const LoginForm = () => (
  <form className="login-form">
    <label htmlFor="username-input">
      Pseudo
      <input
        className="username-input"
        id="username-input"
      />
    </label>

    <label htmlFor="password-input">
      Mot de passe
      <input
        className="password-input"
        id="password-input"
        type="password"
      />
      <a href="/lost-password" className="lost-password">
        Mot de passe oublié
      </a>
    </label>

    <div className="links">
      <button type="submit" className="login-submit">
        Se connecter
      </button>
      <a href="/inscription" className="inscription">
        Inscription
      </a>
    </div>
  </form>
);

export default LoginForm;
