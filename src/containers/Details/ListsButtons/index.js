import { connect } from 'react-redux';

// on importe le composant de présentation
import ListsButtons from 'src/components/Details/ListsButtons';

import {
  addSerieToList,
  editUserlistSerie,
  deleteUserlistSerie,
  addSerieToApiUserlist,
  editSerieToApiUserlist,
  deleteSerieToApiUserlist,
} from 'src/actions/actions';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  addSerieToUserlist: (newSerieId, newSerieTitle, newSerieType) => {
    dispatch(addSerieToList(newSerieId, newSerieTitle, newSerieType));
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

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(ListsButtons);
