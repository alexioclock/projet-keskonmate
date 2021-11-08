import { connect } from 'react-redux';

import { handleSearchChange, filterSearchedSeries } from 'src/actions/actions';

// on importe le composant de présentation
import SearchBar from 'src/components/Header/SearchBar';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  series: state.series.filteredSeries,
  search: state.series.searchedSerie,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  handleSearchChange: (newValue) => {
    dispatch(handleSearchChange(newValue));
  },
  filterSearchedSeries: () => {
    dispatch(filterSearchedSeries());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
