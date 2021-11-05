import { connect } from 'react-redux';
import HomeHeader from 'src/components/Home/HomeHeader';

const mapStateToProps = (state) => ({
  isConnected: state.user.isConnected,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
