import { connect } from 'react-redux';

import SeriesCard from 'src/components/SeriesGrid/SeriesCard';

import { openLoginForm } from 'src/actions/subscribeForm';

import { addSerieToApiUserlist, editSerieToApiUserlist } from 'src/actions/actions';

const mapStateToProps = (state) => ({
  isConnected: state.user.isConnected,
});

const mapDispatchToProps = (dispatch) => ({
  addSerieToApiUserlist: (newSerieId, newSerieTitle, newSerieImage, newSerieType) => {
    dispatch(addSerieToApiUserlist(newSerieId, newSerieTitle, newSerieImage, newSerieType));
  },
  editSerieToApiUserlist: (userlistId, newSerieType, newCurrentSeason, newCurrentEpisode) => {
    dispatch(editSerieToApiUserlist(userlistId, newSerieType, newCurrentSeason, newCurrentEpisode));
  },
  openLoginForm: () => {
    const action = openLoginForm();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SeriesCard);
