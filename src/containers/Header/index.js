import { connect } from 'react-redux';

import Header from 'src/components/Header';

import { openLoginForm } from 'src/actions/subscribeForm';

const mapStateToProps = (state) => ({
  username: state.user.currentUser.userNickname,
  isConnected: state.user.isConnected,
  isLoginFormOpened: state.subscribeForm.isLoginFormOpened,
});

const mapDispatchToProps = (dispatch) => ({
  openLoginForm: () => {
    const action = openLoginForm();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
