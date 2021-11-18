import { connect } from 'react-redux';

import HomeCurrentList from 'src/components/Home/HomeContent/HomeCurrentList';

const mapStateToProps = (state) => ({
  currentSeries: state.userLists.userLists,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeCurrentList);
