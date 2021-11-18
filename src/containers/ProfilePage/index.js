import { connect } from 'react-redux';

import ProfilePage from 'src/components/ProfilePage';

const mapStateToProps = (state) => ({
  username: state.user.currentUser.userNickname,
  email: state.user.currentUser.email,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
