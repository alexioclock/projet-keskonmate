import './styles.scss';
import HomeList from './HomeList';
import SuggestionList from './SuggestionList';

const HomeContentConnected = () => (
  <div className="home-content-connected">
    <div className="home-lists">
      <HomeList />
      <HomeList />
    </div>
    <SuggestionList />
  </div>

);

export default HomeContentConnected;
