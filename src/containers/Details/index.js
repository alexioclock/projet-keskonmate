import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { findSerie, findSerieInUserLists } from 'src/selectors/series';
import Details from 'src/components/Details';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state, ownProps) => {
  return ({
    serie: findSerie(state.series.seriesList, ownProps.match.params.slug),
    isConnected: state.user.isConnected,
    userSerie: findSerieInUserLists(state.userLists.userLists, ownProps.match.params.slug),
  });
};

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
});

const container = connect(mapStateToProps, mapDispatchToProps)(Details);

export default withRouter(container);
