import { connect } from 'react-redux';

import WatchedSeries from 'src/components/SeriesList/WatchedSeries';

const mapStateToProps = (state) => ({
  watchedSeries: state.userLists.userLists,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(WatchedSeries);
