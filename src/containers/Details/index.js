import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { findSerieInUserLists } from 'src/selectors/series';
import Details from 'src/components/Details';
import { findSeries } from '../../actions/series';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state, ownProps) => {
  return ({
    currentSeries: state.series.currentSeriesDetails,
    isConnected: state.user.isConnected,
    userSerie: findSerieInUserLists(state.userLists.userLists, ownProps.match.params.slug),
  });
};

const mapDispatchToProps = (dispatch) => ({
  findSeries: (slug) => {
    dispatch(findSeries(slug));
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(Details);

export default withRouter(container);
