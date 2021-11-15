import { connect } from 'react-redux';
import CatalogueFilters from 'src/components/Catalogue/CatalogueFilters';
import {
  alphabeticalTitleFilter,
  reverseAlphabeticalTitleFilter,
  youngerToOlderFilter,
  olderToYoungerFilter,
  alphabeticalDirectorFilter,
  reverseAlphabeticalDirectorFilter,
} from 'src/actions/seriesFilter';

const mapStateToProps = (state) => ({
  showLoading: state.series.showLoading,

});

const mapDispatchToProps = (dispatch) => ({
  setAlphabeticalTitleFilter: () => {
    dispatch(alphabeticalTitleFilter());
  },
  setReverseAlphabeticalTitleFilter: () => {
    dispatch(reverseAlphabeticalTitleFilter());
  },
  setYoungerToOlderFilter: () => {
    dispatch(youngerToOlderFilter());
  },
  setOlderToYoungerFilter: () => {
    dispatch(olderToYoungerFilter());
  },
  setAlphabeticalDirectorFilter: () => {
    dispatch(alphabeticalDirectorFilter());
  },
  setReverseAlphabeticalDirectorFilter: () => {
    dispatch(reverseAlphabeticalDirectorFilter());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogueFilters);
