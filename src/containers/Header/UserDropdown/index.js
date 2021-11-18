import { connect } from 'react-redux';

import UserDropdown from 'src/components/Header/UserDropdown';

import { logout } from 'src/actions/login';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    const action = logout();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDropdown);
