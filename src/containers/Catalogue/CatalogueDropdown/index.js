import { connect } from 'react-redux';
import CatalogueDropdown from 'src/components/Catalogue/CatalogueDropdown';
import { filterByGenre } from 'src/actions/seriesFilter';



const mapStateToProps = (state) => ({
  genre: state.dropdownFilter.genreList,
});

const mapDispatchToProps = (dispatch) => ({
  filterByGenreProps: (newValue) => {
    dispatch(filterByGenre(newValue));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(CatalogueDropdown);
