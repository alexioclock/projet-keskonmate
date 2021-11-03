import PropTypes from 'prop-types';
import './styles.scss';
import SuggestionList from 'src/containers/Home/HomeContent/SuggestionList';
import HomeList from 'src/containers/Home/HomeContent/HomeList';

const HomeContent = ({ isConnected }) => (
  <div className="home-content">
    {isConnected && (
      <div className="home-lists">
        <HomeList />
        <HomeList />
      </div>
    )}
    <SuggestionList />
  </div>
);

HomeContent.propTypes = {
  isConnected: PropTypes.bool.isRequired,
};

export default HomeContent;
