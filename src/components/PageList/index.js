// == Import
import './styles.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import WatchedSeries from 'src/containers/SeriesList/WatchedSeries';
import ToWatchSeries from 'src/containers/SeriesList/ToWatchSeries';
import CurrentSeries from 'src/containers/SeriesList/CurrentSeries';
import ListNavigation from './ListNavigation';
import Details from 'src/containers/Details';

// == Composant
const PageList = () => (
  <div className="list-navigation">
    <Router>
      <ListNavigation />
      <Route path="/series-vues" exact component={WatchedSeries} />
      <Route path="/series-en-cours" exact component={CurrentSeries} />
      <Route path="/series-a-voir" exact component={ToWatchSeries} />
    </Router>
  </div>
);

// == Export
export default PageList;
