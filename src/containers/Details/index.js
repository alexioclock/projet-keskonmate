import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Details from 'src/components/Details';

import { findSerieInUserlist, addSerieToApiUserlist, editSerieToApiUserlist } from 'src/actions/actions';
import { openLoginForm } from 'src/actions/subscribeForm';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => ({
  isConnected: state.user.isConnected,
  type: state.userLists.currentSerieType,
  userlistId: state.userLists.currentUserlistId,
  userlistSeasonNb: state.userLists.currentUserlistSeasonNb,
  userlistEpisodeNb: state.userLists.currentUserlistEpisodeNb,
});

const mapDispatchToProps = (dispatch) => ({
  findSerieInUserlist: (serieId) => {
    dispatch(findSerieInUserlist(serieId));
  },
  addSerieToApiUserlist: (newSerieId, newSerieTitle, newSerieImage, newSerieType) => {
    dispatch(addSerieToApiUserlist(newSerieId, newSerieTitle, newSerieImage, newSerieType));
  },
  editSerieToApiUserlist: (serieId, newSerieType) => {
    dispatch(editSerieToApiUserlist(serieId, newSerieType));
  },
  openLoginForm: () => {
    const action = openLoginForm();
    dispatch(action);
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(Details);

export default withRouter(container);
