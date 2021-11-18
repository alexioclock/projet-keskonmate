import { connect } from 'react-redux';

import HomeToWatchList from 'src/components/Home/HomeContent/HomeToWatchList';

const mapStateToProps = (state) => ({
  toWatchSeries: state.userLists.userLists,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeToWatchList);
