import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { findSerieInUserlist } from 'src/actions/actions';
import Details from 'src/components/Details';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return ({
    isConnected: state.user.isConnected,
    currentSerieType: state.userLists.currentSerieType,
  });
};

const mapDispatchToProps = (dispatch) => ({
  findSerieInUserlist: (serieId) => {
    dispatch(findSerieInUserlist(serieId));
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(Details);

export default withRouter(container);
