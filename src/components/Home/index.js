import './style.scss';
import HomeContent from 'src/containers/Home/HomeContent';
import HomeHeader from 'src/containers/Home/HomeHeader';

const Home = () => (
  <div className="home">
    <HomeHeader />
    <HomeContent />
  </div>
);

export default Home;
