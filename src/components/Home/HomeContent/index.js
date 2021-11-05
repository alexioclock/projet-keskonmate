import PropTypes from 'prop-types';
import './styles.scss';
import SuggestionList from 'src/containers/Home/HomeContent/SuggestionList';
import HomeCurrentList from 'src/containers/Home/HomeContent/HomeCurrentList';
import HomeToWatchList from 'src/containers/Home/HomeContent/HomeToWatchList';

const HomeContent = ({ isConnected }) => (
  <div className="home-content">
    {isConnected && (
      <div className="home-lists">
        <HomeCurrentList />
        <HomeToWatchList />
      </div>
    )}
    <SuggestionList />
  </div>
);

HomeContent.propTypes = {
  isConnected: PropTypes.bool.isRequired,
};

export default HomeContent;
