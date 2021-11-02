import { connect } from 'react-redux';

// on importe le composant de présentation
import Details from 'src/components/Details';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  title: state.series.seriesList[0].title,
  synopsis: state.series.seriesList[0].synopsis,
  genres: state.series.seriesList[0].genre,
  actors: state.series.seriesList[0].actor,
  seasons: state.series.seriesList[0].season,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Details);
