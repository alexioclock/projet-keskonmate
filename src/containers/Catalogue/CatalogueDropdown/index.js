import { connect } from 'react-redux';

import CatalogueDropdown from 'src/components/Catalogue/CatalogueDropdown';

import { genreFilter } from 'src/actions/seriesFilter';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  setGenreFilter: (genreId) => {
    dispatch(genreFilter(genreId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogueDropdown);
