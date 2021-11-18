import PropTypes from 'prop-types';

import SuggestionList from 'src/containers/Home/HomeContent/SuggestionList';
import HomeCurrentList from 'src/containers/Home/HomeContent/HomeCurrentList';
import HomeToWatchList from 'src/containers/Home/HomeContent/HomeToWatchList';

import './styles.scss';

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
