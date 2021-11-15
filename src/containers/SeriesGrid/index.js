import { connect } from 'react-redux';

import SeriesGrid from 'src/components/SeriesGrid';
import { fetchSeries } from '../../actions/series';

const mapStateToProps = (state) => ({
  series: state.series.seriesList,
  userlist: state.userLists.userLists,
  showLoading: state.series.showLoading,
});

const mapDispatchToProps = (dispatch) => ({
  loadSeries: () => {
    dispatch(fetchSeries());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SeriesGrid);
