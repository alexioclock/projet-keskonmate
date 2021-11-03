import { connect } from 'react-redux';

// on importe le composant de présentation
import CatalogueDropdown from 'src/components/Catalogue/CatalogueDropdown';

// on importe l'action que l'on veut dispatch


// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  genre: state.dropdownFilter.genreList,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  setValue: (/* param1 */) => {
    dispatch(doSomething(/* param 1 */));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(CatalogueDropdown);
