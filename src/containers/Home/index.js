import { connect } from 'react-redux';

import Home from 'src/components/Home';

import { fetchSeries } from '../../actions/series';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  loadSeries: () => {
    dispatch(fetchSeries());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
