import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  findSerieInUserlist,
  addSerieToList,
  editUserlistSerie,
  addSerieToApiUserlist,
  editSerieToApiUserlist,
} from 'src/actions/actions';
import Details from 'src/components/Details';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => ({
  isConnected: state.user.isConnected,
  type: state.userLists.currentSerieType,
  userlistId: state.userLists.currentUserlistId,
});

const mapDispatchToProps = (dispatch) => ({
  findSerieInUserlist: (serieId) => {
    dispatch(findSerieInUserlist(serieId));
  },
  addSerieToUserlist: (newSerieId, newSerieTitle, newSerieImage, newSerieType) => {
    dispatch(addSerieToList(newSerieId, newSerieTitle, newSerieImage, newSerieType));
  },
  editUserlistSerie: (serieId, newSerieType) => {
    dispatch(editUserlistSerie(serieId, newSerieType));
  },
  addSerieToApiUserlist: () => {
    dispatch(addSerieToApiUserlist());
  },
  editSerieToApiUserlist: () => {
    dispatch(editSerieToApiUserlist());
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(Details);

export default withRouter(container);
