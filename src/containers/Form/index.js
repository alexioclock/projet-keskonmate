import { connect } from 'react-redux';

// on importe le composant de présentation
import Form from 'src/components/Form';
import {
  setInputNickname,
  setEmailInput,
  setPasswordInput,
  setConfirmPasswordInput,
} from '../../actions/subscribeForm';

// on importe l'action que l'on veut dispatch

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  inputNickname: state.suscribeForm.nicknameInput,
  emailInput: state.suscribeForm.emailInput,
  passwordInput: state.suscribeForm.passwordInput,
  confirmPasswordInput: state.suscribeForm.confirmPasswordInput,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({

  setInputNickname: (newValue) => {
    const action = setInputNickname(newValue);
    dispatch(action);
  },

  setEmailInput: (newValue) => {
    const action = setEmailInput(newValue);
    dispatch(action);
  },
  setPasswordInput: (newValue) => {
    const action = setPasswordInput(newValue);
    dispatch(action);
  },
  setConfirmPasswordInput: (newValue) => {
    const action = setConfirmPasswordInput(newValue);
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Form);
