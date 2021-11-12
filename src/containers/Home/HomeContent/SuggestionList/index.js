import { connect } from 'react-redux';
import SuggestionList from 'src/components/Home/HomeContent/SuggestionList';
import { fetchHomeOrder } from '../../../../actions/seriesFilter';

const mapStateToProps = (state) => ({
  homeOrder: {},
  userlist: state.userLists.userLists,
});

const mapDispatchToProps = (dispatch) => ({
  loadHomeOrder: () => {
    dispatch(fetchHomeOrder());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(SuggestionList);
