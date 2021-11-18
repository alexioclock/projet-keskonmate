import { connect } from 'react-redux';

import SuggestionList from 'src/components/Home/HomeContent/SuggestionList';

import { fetchHomeOrder } from '../../../../actions/seriesFilter';

const mapStateToProps = (state) => ({
  homeOrderList: state.series.homeOrderList,
  userlist: state.userLists.userLists,
  series: state.series.seriesList,
});

const mapDispatchToProps = (dispatch) => ({
  loadHomeOrder: () => {
    dispatch(fetchHomeOrder());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SuggestionList);
