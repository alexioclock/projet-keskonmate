import { connect } from 'react-redux';
import HomeHeader from 'src/components/Home/HomeHeader';
import { openLoginForm } from 'src/actions/subscribeForm';

const mapStateToProps = (state) => ({
  isConnected: state.user.isConnected,
  username: state.user.currentUser.userNickname,
  isLoginFormOpened: false,
});

const mapDispatchToProps = (dispatch) => ({
  openLoginForm: () => {
    const action = openLoginForm();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
