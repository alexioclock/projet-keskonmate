import './styles.scss';
import PropTypes from 'prop-types';

const LoginForm = (
  {
    nickname,
    password,
    setNickname,
    setPassword,
    handleSubmit,
    errorMessage,
  },
) => (
  <form
    className="login-form"
    onSubmit={(event) => {
      event.preventDefault();
      handleSubmit();
    }}
  >
    <label htmlFor="username-input">
      Email
      <input
        className="username-input"
        id="username-input"
        value={nickname}
        onChange={(e) => {
          setNickname(e.target.value);
        }}
      />
    </label>

    <label htmlFor="password-input">
      Mot de passe
      <input
        className="password-input"
        id="password-input"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <a href="/lost-password" className="lost-password">
        Mot de passe oublié
      </a>
    </label>

    <div className="links">
      <button
        type="submit"
        className="login-submit"
      >
        Se connecter
      </button>
      <a href="/inscription" className="inscription">
        Inscription
      </a>
    </div>

    {errorMessage !== ''
      ? (
        <div className="login-error">
          <p>{errorMessage}</p>
        </div>
      )
      : ''}
  </form>
);

LoginForm.propTypes = {
  nickname: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setNickname: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,

};
export default LoginForm;
