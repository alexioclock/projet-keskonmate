import './home.scss';
import HomeHeaderConnected from './HomeHeaderConnected';
import HomeHeaderNotConnected from './HomeHeaderNotConnected';

const Home = () => (
  <div className="home">
    <HomeHeaderConnected />
    {/* <HomeHeaderNotConnected /> */}
  </div>
);

export default Home;
