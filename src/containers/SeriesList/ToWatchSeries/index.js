import { connect } from 'react-redux';

import ToWatchSeries from 'src/components/SeriesList/ToWatchSeries';

const mapStateToProps = (state) => ({
  toWatchSeries: state.userLists.userLists,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ToWatchSeries);
