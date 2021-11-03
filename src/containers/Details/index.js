import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import Details from 'src/components/Details';
import { findSerie } from 'src/selectors/series';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state, ownProps) => {
  return ({
    serie: findSerie(state.series.seriesList, ownProps.match.params.slug),
    isConnected: state.user.isConnected,
  });
};

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
});

const container = connect(mapStateToProps, mapDispatchToProps)(Details);

export default withRouter(container);
