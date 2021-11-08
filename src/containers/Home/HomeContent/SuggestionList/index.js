import { connect } from 'react-redux';

// on importe le composant de présentation
import SuggestionList from 'src/components/Home/HomeContent/SuggestionList';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  series: state.series.seriesList,
  userlist: state.userLists.userLists,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(SuggestionList);
