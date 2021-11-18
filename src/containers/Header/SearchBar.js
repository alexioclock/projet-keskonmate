import { connect } from 'react-redux';

import SearchBar from 'src/components/Header/SearchBar';

import { handleSearchChange, filterSearchedSeries } from 'src/actions/actions';

const mapStateToProps = (state) => ({
  series: state.series.filteredSeries,
  search: state.series.searchedSerie,
});

const mapDispatchToProps = (dispatch) => ({
  handleSearchChange: (newValue) => {
    dispatch(handleSearchChange(newValue));
  },
  filterSearchedSeries: (newValue) => {
    dispatch(filterSearchedSeries(newValue));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
