import './styles.scss';
import HomeList from './HomeList';
import SuggestionList from './SuggestionList';

const HomeContentConnected = () => (
  <div className="home-content-connected">
    <HomeList />
    <HomeList />
    <SuggestionList />
  </div>

);

export default HomeContentConnected;
