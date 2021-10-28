import './style.scss';
import HomeContentConnected from './HomeContentConnected';
import HomeHeaderConnected from './HomeHeaderConnected';
import HomeHeaderNotConnected from './HomeHeaderNotConnected';
import HomeContentNotConnected from './HomeContentNotConnected';

const Home = () => (
  <div className="home">
    {/* <HomeHeaderConnected /> */}
    <HomeHeaderNotConnected />
    <HomeContentNotConnected />

  </div>
);

export default Home;
