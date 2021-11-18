import { connect } from 'react-redux';

import CurrentSeries from 'src/components/SeriesList/CurrentSeries';

const mapStateToProps = (state) => ({
  currentSeries: state.userLists.userLists,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentSeries);
