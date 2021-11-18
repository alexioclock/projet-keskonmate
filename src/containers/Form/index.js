import { connect } from 'react-redux';

import Form from 'src/components/Form';

import {
  setInputNickname,
  setEmailInput,
  setPasswordInput,
  setConfirmPasswordInput,
  submitInscription,
  openLoginForm,
} from '../../actions/subscribeForm';

const mapStateToProps = (state) => ({
  inputNickname: state.subscribeForm.nicknameInput,
  emailInput: state.subscribeForm.emailInput,
  passwordInput: state.subscribeForm.passwordInput,
  confirmPasswordInput: state.subscribeForm.confirmPasswordInput,
});

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
  submitInscription: () => {
    dispatch(submitInscription());
  },
  openLoginForm: () => {
    const action = openLoginForm();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
