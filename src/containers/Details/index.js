import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  findSerieInUserlist,
  addSerieToList,
  editUserlistSerie,
  deleteUserlistSerie,
  addSerieToApiUserlist,
  editSerieToApiUserlist,
  deleteSerieToApiUserlist,
} from 'src/actions/actions';
import Details from 'src/components/Details';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => ({
  isConnected: state.user.isConnected,
  type: state.userLists.currentSerieType,
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
  deleteUserlistSerie: (serieId) => {
    dispatch(deleteUserlistSerie(serieId));
  },
  addSerieToApiUserlist: () => {
    dispatch(addSerieToApiUserlist());
  },
  editSerieToApiUserlist: () => {
    dispatch(editSerieToApiUserlist());
  },
  deleteSerieToApiUserlist: () => {
    dispatch(deleteSerieToApiUserlist());
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(Details);

export default withRouter(container);
