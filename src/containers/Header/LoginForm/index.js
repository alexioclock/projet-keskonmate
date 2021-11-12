import { connect } from 'react-redux';

// on importe le composant de présentation
import LoginForm from 'src/components/Header/LoginForm';
import { setPassword, setNickname, submitLogin, errorConnexion } from 'src/actions/login';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  nickname: state.user.nicknameLogin,
  password: state.user.passwordLogin,

});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  setNickname: (newValue) => {
    const action = setNickname(newValue);
    dispatch(action);
  },
  setPassword: (newValue) => {
    const action = setPassword(newValue);
    dispatch(action);
  },
  handleSubmit: () => {
    dispatch(submitLogin());
  },
  error: () => {
    dispatch(errorConnexion());
  },

});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
