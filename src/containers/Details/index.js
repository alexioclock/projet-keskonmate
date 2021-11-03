import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

// on importe le composant de présentation
import Details from 'src/components/Details';

import { findSerie } from 'src/selectors/series';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state, ownProps) => {
  return ({
    serie: findSerie(state.series.seriesList, ownProps.match.params.slug),
  });
};

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
});

// === création de l'assistant
const container = connect(mapStateToProps, mapDispatchToProps)(Details);

export default withRouter(container);
