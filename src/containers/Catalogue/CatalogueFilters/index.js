import { connect } from 'react-redux';
import CatalogueFilters from 'src/components/Catalogue/CatalogueFilters';
import { alphabeticalFilter } from 'src/actions/seriesFilter';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  alphabeticalFilter: () => {
    dispatch(alphabeticalFilter());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogueFilters);
