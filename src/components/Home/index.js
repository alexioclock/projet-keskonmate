import PropTypes from 'prop-types';
import { useEffect } from 'react';

import HomeContent from 'src/containers/Home/HomeContent';
import HomeHeader from 'src/containers/Home/HomeHeader';

import './style.scss';

const Home = ({ loadSeries }) => {
  useEffect(() => {
    loadSeries();
  }, []);
  return (
    <div className="home">
      <HomeHeader />
      <HomeContent />
    </div>
  );
};

Home.propTypes = {
  loadSeries: PropTypes.func.isRequired,
};

export default Home;
