import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { findSerie, findSerieInUserLists } from 'src/selectors/series';
import Details from 'src/components/Details';
import { fetchSeries } from '../../actions/series';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state, ownProps) => {
  return ({
    serie: findSerie(state.series.seriesList, ownProps.match.params.slug),
    isConnected: state.user.isConnected,
    userSerie: findSerieInUserLists(state.userLists.userLists, ownProps.match.params.slug),
  });
};

const mapDispatchToProps = (dispatch) => ({
  loadSeries: () => {
    dispatch(fetchSeries());
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(Details);

export default withRouter(container);
