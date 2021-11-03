import './styles.scss';
import SuggestionList from 'src/containers/Home/HomeContent/SuggestionList';
import HomeList from 'src/containers/Home/HomeContent/HomeList';

const HomeContent = () => {
  const isConnected = false;

  return (
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
};

export default HomeContent;
