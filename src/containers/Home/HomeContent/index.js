import { connect } from 'react-redux';

import HomeContent from 'src/components/Home/HomeContent';

const mapStateToProps = (state) => ({
  isConnected: state.user.isConnected,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContent);
