import { connect } from 'react-redux';

import LoginForm from 'src/components/Header/LoginForm';
import {
  setPassword, setNickname, submitLogin,
} from 'src/actions/login';

const mapStateToProps = (state) => ({
  nickname: state.user.nicknameLogin,
  password: state.user.passwordLogin,
  errorMessage: state.user.errorMessage,
});

const mapDispatchToProps = (dispatch) => ({
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

});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
