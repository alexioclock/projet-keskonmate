import { connect } from 'react-redux';

import SeriesGrid from 'src/components/SeriesGrid';

const mapStateToProps = (state) => ({
  series: state.series.seriesList,
  userlist: state.userLists.userLists,
  showLoading: state.series.showLoading,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SeriesGrid);
